import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, Injectable, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { DatabaseService } from '../database.service';
import { D_Document, D_Documents, D_Project, D_Projects } from '../generated/DataBaseProto/DatabaseProto_pb';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ArchiveComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColumns = ["Id", "name", "completed", "lastedited", "endDate"];
  projects: D_Projects = new D_Projects();
  public dataSource: Array<D_Project> = new Array<D_Project>();
  matdatascoure = new MatTableDataSource<D_Project>(this.dataSource);
  length = this.matdatascoure.data.length;
  Docoments: D_Documents = new D_Documents();

  isExpansionDetailRow = (id:number, row: any|D_Documents) => this.isExpansionDetailRows(id,row);
canExpand: boolean = false;

  constructor(private dataserve: DatabaseService) {
    this.dataserve.GetProjectsTheRigthWay("andi0137");
    this.dataserve.behavProject$.asObservable().subscribe(x => {
      if (x != this.projects) {
        this.projects = x;
        this.dataSource = this.projects.getDProjectList();
        this.matdatascoure.data = this.projects.getDProjectList();
      }
    });
    this.onsortChange();
    // this.matdatascoure.sort = this.sort;
  }
  ngAfterViewInit(): void {
    this.matdatascoure.paginator = this.paginator;
    this.matdatascoure.sort = this.sort;
  }
  ngOnDestroy(): void {
    this.dataserve.behavProject$.unsubscribe();
  }
  ngOnInit() {
    // this.dataserve.GetProjects("alex303a");
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matdatascoure.filter = filterValue.trim().toLowerCase();
  }

  AddNewProject() {
    // this.dataserve.AddProject("alex303a",new D_Project());
  }

  onsortChange() {

    this.matdatascoure.sortingDataAccessor = (item, property) => {
      switch (property) {
        case 'name': return item.getName();
        case 'Id': return item.getId();
        case 'Completed': return "" + item.getCompleted() + "";
        case 'lastedited': return item.getLastedited();
        case 'endDate': return item.getEnddate();
        default: return "";
      }
    };
  }

  TestExpanding() {
    // this.dataserve.GetDocuments("alex303a",45);
    // this.dataserve.GetDocument("alex303a",45);
    this.dataserve.GetProject2("andi0137", 151);
    // for (let index = 0; index < 250; index++) {
    //   this.dataserve.GetDocuments("alex303a", index);
    // }
  }
  addnewdoc() {
  }
  GetDocoments(element: D_Project) : D_Documents {
    this.dataserve.GetDocuments("alex303a", (element as D_Project).getId()).subscribe(x => {
      if (x.getDDocumentsList().length > 0 && x != this.Docoments){
        this.Docoments = x;
        this.canExpand = true;

        console.log(this.Docoments);

      }
    });
    return this.Docoments;
    // console.log(this.Docoments === element ? null : element);
  }

  isExpansionDetailRows(i: number, row: D_Project): boolean{
// This waits for the data to be alivalbe befor any rows can be expanded..
//Note: perhasp this is the way to go, but look after a other way to do this.
    // this.dataserve.GetDocuments("alex303a", (row as D_Project).getId()).subscribe(x => {
    //   if (x.getDDocumentsList().length > 0 && x != this.Docoments){
    //     this.Docoments = x;
    //     //this.canExpand = true;

    //     console.log(this.Docoments);

    //   }
    // });
    if(row.hasOwnProperty('ProjectId') && this.Docoments.getDDocumentsList().length > 0){
      console.log("isExpansionDetailRow is now true")
      this.canExpand = true;
      return this.canExpand
    }
    return this.canExpand;
  }

}
