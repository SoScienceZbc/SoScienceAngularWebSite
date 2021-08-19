import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { expandingD_Project } from '../archive/archive.component';
import { DatabaseService } from '../database.service';
import { D_Project, D_Projects, D_ProjectTheme } from '../protos/DatabaseProto_pb';
import { LoadingService } from '../loading.service';
import { AfterViewInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Console } from 'console';
import { DialogAreYouSureComponent } from '../dialog-are-you-sure/dialog-are-you-sure.component';
import { MatDialog } from '@angular/material/dialog';

interface Language {
  value: string | any;
  viewValue: string;
}

@Component({
  selector:'app-options',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*'})),
      transition('expanded <=> collapsed, void => expanded', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class SettingsComponent implements OnInit, AfterViewInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  
  public dataSource: Array<D_ProjectTheme> = new Array<D_ProjectTheme>();

  loading$ = this.spinner.loading$;
  
  displayedColumns = ["name", "subject", "lastedited", "endDate", "menu"];

  @ViewChild("mattable", { read: MatSort }) sort!: MatSort;

  matdatasource = new MatTableDataSource<D_ProjectTheme>(this.dataSource);

  projectThemes: Array<D_ProjectTheme> = new Array<D_ProjectTheme>();

  Projects = new D_Projects();
  
  
  constructor(database: DatabaseService, private spinner:LoadingService,private dilog: MatDialog) 
  {
    database.listOfProjectThemes$.subscribe(projectThemes =>{
      this.projectThemes = projectThemes;
      this.matdatasource.data = [];
      this.projectThemes.forEach(projectTheme => {
        this.matdatasource.data.push(projectTheme);
        this.matdatasource._updateChangeSubscription();
      })
      this.spinner.hide();
    });
    database.GetProjectTheme();
    let d = new D_ProjectTheme();
  }
  ngAfterViewInit(): void {
    this.matdatasource.paginator = this.paginator;
    this.matdatasource.sort = this.sort;
    this.onsortChange();
  }

  public languages: Language[] = [
    {value: 'danish', viewValue: 'Dansk'},
    {value: 'english', viewValue: 'Engelsk'}
  ];
  ngOnInit(): void {
  }

  /**
   * This apply a filter to the matdatatable.
   */
   applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matdatasource.filter = filterValue.trim().toLowerCase();
  }

  consoleLog(id : any){
      console.log(id);
  }

  DeleteProjectTheme(id : any){
    this.dilog.open(DialogAreYouSureComponent, {
      data: { docoment: id, type: "PT" },
      autoFocus: true,
      restoreFocus: true,

    });
}

  onsortChange() {
    this.matdatasource.sortingDataAccessor = (item, property) => {
      let switchValue = ""
      switch (property) {
        case 'name': switchValue = item.getName(); break;
        case 'subject': switchValue = item.getSubject(); break;
        case 'lastedited': switchValue = item.getLastedited(); break;
        case 'endDate': switchValue = item.getEnddate(); break;
      }
      return switchValue;
    };
}
}
