import { Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { DatabaseService } from '../database.service';
import { D_Document } from '../protos/DatabaseProto_pb';
import { LoadingService } from '../loading.service';

import { interval, Subscription } from 'rxjs';
// import *  as customEditor from '../ckedtitor/build/ckeditor';


// @Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-TextEditor',
  templateUrl: './TextEditor.component.html',
  styleUrls: ['./TextEditor.component.css']
})
export class TextEditorComponent implements OnInit, OnDestroy {

  updated : boolean = false;
  subscription: Subscription;
  showTitle : boolean = true;
  @ViewChild('editor') editor!: any;

  localDDocoment$: BehaviorSubject<D_Document> = new BehaviorSubject<D_Document>(new D_Document);
  localDDocoment: D_Document = this.localDDocoment$.value;
  localHtmltext: BehaviorSubject<string> = new BehaviorSubject<string>("");
  spinner: LoadingService = new LoadingService();
  loadingText$ = this.spinner.loading$;
  title: string | any;

  ProgressEnum: Array<completedPartsAngular> = [{
    CompletedPartName: "Forside", isCompleted: false
  },
  { CompletedPartName: "Formaal", isCompleted: false },
  { CompletedPartName: "Materiale", isCompleted: false },
  { CompletedPartName: "Forsoegsopstilling", isCompleted: false },
  { CompletedPartName: "Sikkerhed", isCompleted: false },
  { CompletedPartName: "Teori", isCompleted: false },
  { CompletedPartName: "Resultater", isCompleted: false },
  { CompletedPartName: "Diskussion", isCompleted: false },
  { CompletedPartName: "Fejlkilder", isCompleted: false },
  { CompletedPartName: "Konklusion", isCompleted: false },
  { CompletedPartName: "Kilder", isCompleted: false },

  ]

  public QuilData = {
    editorData: [],
    Title: "",
    completedList: this.ProgressEnum
  }

  temp : any;

  editorInstance: any;
  onEditorCreated(quillInstance : any) {
    this.editorInstance = quillInstance;
    console.log(quillInstance);
    
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataservice: DatabaseService, private dialog: MatDialog) {
    this.localDDocoment$ = this.dataservice.GetDocomentHtml(sessionStorage.getItem("Token") as string, (this.data.docoment as D_Document).getId());
    this.dataservice.EditorDocoment$.subscribe(x => {
     
      if (x.getData() == ''){
        this.QuilData.Title = x.getTitle();
        x.getCompletedList().forEach((x, y) => {
          console.log("CompleteList ", x, y);
          this.check(x);
        });
      }
      else if (this.QuilData.editorData != JSON.parse(x.getData())) {
        this.QuilData.Title = x.getTitle();
        this.QuilData.editorData = JSON.parse(x.getData());
        x.getCompletedList().forEach((x, y) => {
          console.log("CompleteList ", x, y);
          this.check(x);
        });
      }
      this.spinner.hide();
    })
    const source = interval(10000);
    this.subscription = source.subscribe(val => this.saveDoc());
    this.spinner.show();
  }

  ngOnInit(): void {
  }
  public saveDoc(){
    if(this.updated){
      this.dataservice.UpdateDocoment(this.localDDocoment$.value);
      this.updated = false;
      console.log("saved");
      
    }
  }

  public onChange(editor: Event | any) {
    if (this.localDDocoment$.value.getId() > 0) {
      this.localDDocoment$.value.setTitle(this.QuilData.Title);
      this.localDDocoment$.value.clearCompletedList();

      //#region checkList

      for (let index = 0; index < this.QuilData.completedList.length; index++) {
        if (this.QuilData.completedList[index].isCompleted) {
          this.localDDocoment$.value.addCompleted(this.QuilData.completedList[index].CompletedPartName)
        }
        
      }
      //#endregion
      this.localDDocoment$.value.setData(JSON.stringify(this.QuilData.editorData));
      this.updated = true;
    }

  }
  changeTitle(){
    console.log(this.showTitle);
    
    this.showTitle = !this.showTitle;
  }
  closeDialogBox() {
    this.spinner.show();
    this.onChange(null);
    this.localDDocoment$.value.setTitle(this.QuilData.Title);
    // console.log("UpdateDockument", this.localDDocoment$.value)
    // this.dataservice.UpdateDocoment(sessionStorage.getItem("Token")!.toString(), this.localDDocoment$.value);
    this.dataservice.GetProjectsTheRigthWay()
    this.dialog.closeAll()

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  check(value: string): boolean {

    switch (value) {
      case 'Forside':
        return this.QuilData.completedList[0].isCompleted = true;
      case 'Formaal':
        return this.QuilData.completedList[1].isCompleted = true;
      case 'Materiale':
        return this.QuilData.completedList[2].isCompleted = true;
      case 'Forsoegsopstilling':
        return this.QuilData.completedList[3].isCompleted = true;
      case 'Sikkerhed':
        return this.QuilData.completedList[4].isCompleted = true;
      case 'Teori':
        return this.QuilData.completedList[5].isCompleted = true;
      case 'Resultater':
        return this.QuilData.completedList[6].isCompleted = true;
      case 'Diskussion':
        return this.QuilData.completedList[7].isCompleted = true;
      case 'Fejlkilder':
        return this.QuilData.completedList[8].isCompleted = true;
      case 'Konklusion':
        return this.QuilData.completedList[9].isCompleted = true;
      case 'Kilder':
        return this.QuilData.completedList[10].isCompleted = true;
      default:
        return false;


    }
  }

  SetCategoro(event: string) {
    if (!this.localDDocoment$.value.getCompletedList().includes(event)) {
      this.localDDocoment$.value.clearCompletedList();
      this.localDDocoment$.value.setCompletedcount(this.localDDocoment$.value.getCompletedList().length);
      this.localDDocoment$.value.addCompleted(event);
      this.dataservice.UpdateDocoment(this.localDDocoment$.value);
      console.log("setcat was true", event)
    } else {
      console.log(event)
    }
  }

}

export interface completedPartsAngular {
  CompletedPartName: string
  isCompleted: boolean
}
