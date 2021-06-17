import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from '../database.service';
import { D_Document, D_Documents, D_Project, D_Projects } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from '../loading.service';
import { CustomMatPaginatorIntl } from './CustomMatPageinatorIntl';

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
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent = new PageEvent();

  /*--------------ViewChilds--------------*/
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  /*--------------Spinner--------------*/
  loading$ = this.spinner.loading$;
  /*--------------SimpleDataObjects--------------*/
  projects: D_Projects = new D_Projects();
  public dataSource: Array<expandingD_Project> = new Array<expandingD_Project>();
  canExpand: boolean = false;
  /*--------------DataTable Values--------------*/
  displayedColumns = ["Id", "name", "completed", "lastedited", "endDate"];
  matdatascoure = new MatTableDataSource<expandingD_Project>(this.dataSource);
  Docoments: expandingD_Docs = new expandingD_Docs();
  expandingelement: expandingD_Docs = new expandingD_Docs();
  isExpansionDetailRow = (id: number, row: any | expandingD_Docs) => this.isExpansionDetailRows(id, row);

  constructor(private dataserve: DatabaseService, private spinner: LoadingService) {

    this.dataserve.GetProjectsTheRigthWay(sessionStorage.getItem('username') as string);
    // this.dataserve.GetProjectsTheRigthWay("alex303a");
    this.dataserve.behavProject$.asObservable().subscribe(x => {
      if (x != this.projects && !(x.getDProjectList().length >= this.projects.getDProjectList().length)) {
        console.log("behavproject$ value: ",this.dataserve.behavProject$.value);
        this.projects = x;
        this.dataSource = this.projects.getDProjectList() as Array<expandingD_Project>;
        this.dataSource.forEach(element => {
          this.GetDocoments(element);
          console.log(element);

        });
        this.matdatascoure.data = this.projects.getDProjectList() as Array<expandingD_Project>;
        // this.spinner.hide();
      }
    }, (a) => { console.log(a) });
    this.onsortChange();
    // this.matdatascoure._updateChangeSubscription();
  }

  ngAfterViewInit(): void {
    this.matdatascoure.paginator = this.paginator;
    this.matdatascoure.sort = this.sort;
  }
  ngOnDestroy(): void {
    this.dataserve.behavProject$.unsubscribe();
  }
  ngOnInit() {
    this.spinner.show();
  }
  /**
   * This apply a filter to the matdatatable.
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matdatascoure.filter = filterValue.trim().toLowerCase();
  }

  /**
   * This adds a new project to the database in the users name.
   * TODO: create a better ui for the user.
   */
  AddNewProject() {
    // this.dataserve.AddProject("alex303a",new D_Project());
  }
  /**
   * This sets up the sorting logic for the table.
   */
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
  /**
   *
   * @param element a single D_prject to fecth docoments for.
   * @returns docoments for the giving project(Note on the surface data is returded here. eg the title and dates but not the main data.)
   */
  GetDocoments(element: expandingD_Project): expandingD_Docs {
    // console.log(element);
    this.dataserve.GetDocuments(sessionStorage.getItem("username")!.toString(), element.getId()).subscribe(x => {
      // console.log('x', x.toArray()[0].length > 0)
      if (x.toArray()[0].length >= 1 && x != this.Docoments) {
        this.Docoments = x.clone() as expandingD_Docs;
        this.Docoments.expanding = true;
        element.clearDocumentsList();
        this.Docoments.getDDocumentsList().forEach((item, args) => {
          element.addDocuments(item, args);
        })
        this.spinner.hide();
        // console.log(element);
      }
      element.Loading = true;
    });
    return this.Docoments;
  }
  /**
   * This is a control cheack to control wheter or not any giving row at any giving time can/allowed to be render.
   * @param i the row id number
   * @param row the row
   * @returns boolean indication wheter or not the row can be expandede/rednder.
   */
  isExpansionDetailRows(i: number, row: expandingD_Project): boolean {
    console.log("Cheaking if row can be expanded");
    return true;
  }

  /**
   * This is false data(mockup) in the case that the docomentslist is empty or null
   * @param element the elemen to fetch docoments for.
   * @returns void
   */
  GetDocomentsAsObject(element: expandingD_Project) {
    let mockup = element.clone();
    if (mockup.getDocumentsList().length > 0) {
      return mockup;
    }
    mockup.clearDocumentsList();
    mockup.addDocuments(new D_Document());
    return mockup;

  }
  StartSpinner(row: expandingD_Project) {
  }
  DeleteDocoment(docoment:D_Document){
    console.log("Now deleting docoment", docoment);
    this.dataserve.RemoveDocoment(docoment,docoment.getProjectid());

  }
}

export class expandingD_Docs extends D_Documents {
  public expanding: boolean = false;
  constructor() {
    super();
  }
}

export class expandingD_Project extends D_Project {
  public Loading: boolean = false;
  constructor() {
    super();
  }

}
