import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DatabaseService } from '../database.service';
import { D_Document, D_Documents, D_Project } from '../protos/DatabaseProto_pb';
import { MediaReply, MediaRequests, MediasReply, RetrieveMediaReply } from '../protos/RemoteMediaProto_pb';
import { LoadingService } from '../loading.service';
import { TextEditorComponent } from '../TextEditor/TextEditor.component';
import quill, { Quill } from 'quill';
import { DialogAreYouSureComponent } from '../dialog-are-you-sure/dialog-are-you-sure.component';
import { QuilEditorPreViewComponent } from '../quil-editor-pre-view/quil-editor-pre-view.component';
import { AddRemoveMemberComponent } from './add-remove-member/add-remove-member.component';
import * as quillToWord from 'quill-to-word';
import { saveAs } from 'file-saver';
import { pdfExporter } from 'quill-to-pdf';
import { RecordAudioComponent } from './media-record/record-audio/record-audio.component';
import { RecordVideoComponent } from './media-record/record-video/record-video.component';
import { MediaServiceService } from '../media-service.service';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed, void', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*'})),
      transition('expanded <=> collapsed, void => expanded', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ArchiveComponent implements OnInit, OnDestroy, AfterViewInit {
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  pageEvent: PageEvent = new PageEvent();

  download = {
    id : 0,
    needToDownload : 0,
    ReadyToDownload : 100,
    Downloaded : 100
  }
  /*--------------ViewChilds--------------*/
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @ViewChild("mattable", { read: MatSort }) sort!: MatSort;

  @ViewChild("tableDone", { read: MatSort }) sortDone!: MatSort;

  @ViewChild("tableDone") tabledone!: MatTable<expandingD_Project>;
  @ViewChild("paginatorDone") paginatorDone!: MatPaginator;

  /*--------------Spinner--------------*/
  loading$ = this.spinner.loading$;
  /*--------------SimpleDataObjects--------------*/
  public dataSource: Array<expandingD_Project> = new Array<expandingD_Project>();
  /*--------------DataTable Values--------------*/
  displayedColumns = ["Id", "name", "completed", "lastedited", "endDate"];
  mediaDisplayedColumns = ["title", "type"]
  matdatasource = new MatTableDataSource<expandingD_Project>(this.dataSource);
  mediaList: Array<MediasReply[]> = new Array<MediasReply[]>();

  dataSourceDoneProjjects: Array<expandingD_Project> = new Array<expandingD_Project>();
  matdatasourceDoneProjects = new MatTableDataSource<expandingD_Project>(this.dataSourceDoneProjjects);

  Documents: expandingD_Docs = new expandingD_Docs();
  Media: expandingMediaRequests = new expandingMediaRequests();
  expandingelement: expandingD_Docs = new expandingD_Docs();
  isExpansionDetailRow = (id: number, row: any | expandingD_Docs) => this.isExpansionDetailRows(id, row);


  constructor(private dataserve: DatabaseService, private mediaService: MediaServiceService, private spinner: LoadingService, private dialog: MatDialog) {
    this.dataserve.GetProjectsTheRigthWay();

    this.dataserve.listOfProjects$.subscribe(x => {
      this.matdatasource.data = [];
      this.matdatasourceDoneProjects.data = [];
      x.forEach((data, index) => {
        if (data.getCompleted()) {
          this.matdatasourceDoneProjects.data.push((data as expandingD_Project))
          this.matdatasourceDoneProjects._updateChangeSubscription();
        } else {
          this.matdatasource.data.push((data as expandingD_Project));
          this.matdatasource._updateChangeSubscription();
        }
        console.log(data.getId());
        mediaService.GetAllMedias(data.getId()).subscribe(media => {
          if(media.getAllmediasList().length > 0) {
            this.mediaList.push(media.getAllmediasList());
          }
          console.log("medialist: " + this.mediaList);

        })
      })
      this.spinner.hide();
    });
  }

  ngAfterViewInit(): void {
    this.matdatasource.paginator = this.paginator;
    this.matdatasource.sort = this.sort;
    this.onsortChange();

    this.matdatasourceDoneProjects.sort = this.sortDone;
    this.matdatasourceDoneProjects.paginator = this.paginatorDone;
    this.onSortDoneChange();
  }

  ngOnDestroy(): void {
    this.dataserve.behavProject$.unsubscribe();
  }

  ngOnInit() {
    this.spinner.show();
  }
  /**
   * This applies a filter to the MatDataTable.
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matdatasource.filter = filterValue.trim().toLowerCase();
  }
  applyFilterDone(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.matdatasourceDoneProjects.filter = filterValue.trim().toLowerCase();
  }

  OpenQuilEditor(event: any) {
    quill.register(TextEditorComponent, true);
    this.dialog.open(TextEditorComponent, {
      data: { docoment: event }
      , autoFocus: true,
      restoreFocus: true,
      maxHeight: '50vh',
    })
  }

  downloadData(project : D_Project){
    this.download = {
      id : project.getId(),
      needToDownload : project.getDocumentsList().length,
      ReadyToDownload : 0,
      Downloaded : 0};
    project.getDocumentsList().forEach(doc => {
      let localData$ = this.dataserve.GetDocomentHtml(sessionStorage.getItem("Token") as string, doc.getId());
      localData$.subscribe(x => {
        if (x != new D_Document()){
          this.download.ReadyToDownload += 100/this.download.needToDownload;
          switch (x.getType()) {
            case 'Doc':
              this.saveAsWordFile(x.getData(),x.getTitle(), project.getId());
              break;
            }
          }
      });
    });
  }

  Log(){
    console.log("Clicked");
  }

  /**
   * This sets up the sorting logic for the table.
   */
  onsortChange() {
    this.matdatasource.sortingDataAccessor = (item, property) => {
      let switchValue = ""
      switch (property) {
        case 'name': switchValue = item.getName(); break;
        case 'Id': switchValue = item.getId().toString(); break;
        case 'lastedited': switchValue = item.getLastedited(); break;
        case 'endDate': switchValue = item.getEnddate(); break;
      }
      return switchValue;
    };

  }

  onSortDoneChange() {
    this.matdatasourceDoneProjects.sortingDataAccessor = (item, property) => {
      let switchValue = ""
      switch (property) {
        case 'name': switchValue = item.getName(); break;
        case 'Id': switchValue = item.getId().toString(); break;
        case 'lastedited': switchValue = item.getLastedited(); break;
        case 'endDate': switchValue = item.getEnddate(); break;
      }
      return switchValue;
    };
  }

  openRecordAudio(id: number) {
    this.dialog.open(RecordAudioComponent, { data:{
      projectid: id
    } })
  }

  openRecordVideo(id:number) {
    this.dialog.open(RecordVideoComponent, { data: {
      projectid: id
     }
    });
  }

  GetText(item:string){
    return "hallo";
  }

  /**
   * This is a control cheack to control wheter or not any giving row at any giving time can/allowed to be render.
   * @param i the row id number
   * @param row the row
   * @returns boolean indication wheter or not the row can be expandede/rednder.
   */
  isExpansionDetailRows(i: number, row: expandingD_Project): boolean {
    // console.log("Cheaking if row can be expanded");
    return true;
  }

  // GetMediaFilesAsObject(media: expandingMediaRequests) {
  //   let mockup = media.clone();
  //   if(mockup.getAllmediasList().length > 0) {
  //     return mockup;
  //   }
  //   mockup.clearAllmediasList();
  //   mockup.addAllmedias(new MediasReply());
  //   return mockup;
  // }

  GetMediaFilesByID(id: number) {
    console.log(id);
    this.mediaList.forEach(x => {
      console.log("x: " + x.length);
      if(x[0].getProjectid() == id){
        return x;
      }
      return;
    })
    return null;
  }

  OpenDialogAreYouSureVideo(event: any){

  }

  /**
   * This is false data(mockup) in the case that the Documentslist is empty or null
   * @param element the elemen to fetch Documents for.
   * @returns void
   */
  GetDocumentsAsObject(element: expandingD_Project) {
    console.log("ello");
    let mockup = element.clone();
    if (mockup.getDocumentsList().length > 0) {
      return mockup;
    }
    mockup.clearDocumentsList();
    mockup.addDocuments(new D_Document());
    return mockup;
  }

  DeleteProject(element: D_Project) {
    this.dialog.open(DialogAreYouSureComponent, {
      data: { docoment: element, type: "P" },
      autoFocus: true,
      restoreFocus: true,
    });
  }

  OpenDialogAreYouSureDocument(event: any) {
    this.dialog.open(DialogAreYouSureComponent, {
      data: { docoment: event, type: "D" },
      autoFocus: true,
      restoreFocus: true,
    });
  }

  updateProject(item: D_Project) {

    const tempitem = item;
    this.dialog.open(DialogAreYouSureComponent, {
      data: { docoment: tempitem, type: "U" },
      autoFocus: true,
      restoreFocus: true,
    });
    this.matdatasource._updateChangeSubscription();

  }

  addMember(id : any){
    this.dialog.open(AddRemoveMemberComponent, {
      data: { id: id, addMemberStyle : true },
      autoFocus: true,
      restoreFocus: true,
    });
  }

  removeMember(id : any){
    this.dialog.open(AddRemoveMemberComponent, {
      data: { id: id, addMemberStyle : false },
      autoFocus: true,
      restoreFocus: true,
    });
  }


  updateProjectUndo(item: D_Project) {

    const tempitem = item;
    this.dialog.open(DialogAreYouSureComponent, {
      data: { docoment: tempitem, type: "UU" },
      autoFocus: true,
      restoreFocus: true,
    });
    this.matdatasourceDoneProjects._updateChangeSubscription();
  }

  openQuillViwer(event: any) {

    quill.register(QuilEditorPreViewComponent, true);
    this.dialog.open(QuilEditorPreViewComponent, {
      data: { docoment: event },
      autoFocus: true,
      restoreFocus: true,
      maxHeight: '50vh',
    })
  }

  async saveAsWordFile(doc : string, title : string, projectID : number) {
    if (doc != ''){
      const data = await quillToWord.generateWord(JSON.parse(doc), {
        exportAs: 'blob',
      });
      saveAs(data as any, title + '.docx');
    }
    this.download.Downloaded += 100/this.download.needToDownload;
  }

  async printPdfFile(doc : string, title : string){
    if (doc != ''){
      const data = await pdfExporter.generatePdf(JSON.parse(doc));
      saveAs(data as any, title + '.pdf');
      this.download.Downloaded += 100/this.download.needToDownload;
    }
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

export class expandingMediaRequests extends MediaRequests {
  public loading: boolean = false;
  constructor() {
    super()
  }
}
