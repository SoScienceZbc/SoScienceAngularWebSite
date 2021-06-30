import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { QuillEditorBase, QuillEditorComponent, QuillModule, QuillService } from 'ngx-quill';
import { Quill } from 'quill';
import { BehaviorSubject } from 'rxjs';
import { DatabaseService } from '../database.service';
import { D_Document } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from '../loading.service';
// import *  as customEditor from '../ckedtitor/build/ckeditor';


// @Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-TextEditor',
  templateUrl: './TextEditor.component.html',
  styleUrls: ['./TextEditor.component.css']
})
export class TextEditorComponent implements OnInit {

  @ViewChild('editor') editor?: any;

  localDDocoment$: BehaviorSubject<D_Document> = new BehaviorSubject<D_Document>(new D_Document);
  localDDocoment: D_Document = this.localDDocoment$.value;
  localHtmltext: BehaviorSubject<string> = new BehaviorSubject<string>("");
  spinner: LoadingService = new LoadingService();
  loadingText$ = this.spinner.loading$;
  title: string | any;

  ProgressEnum: Array<completedPartsAngular> = [{
    ComppletedPartName: "Forside", isCompleted: false
  },
  { ComppletedPartName: "Formaal", isCompleted: false },
  { ComppletedPartName: "Materiale", isCompleted: false },
  { ComppletedPartName: "Forsoegsopstilling", isCompleted: false },
  { ComppletedPartName: "Sikkerhed", isCompleted: false },
  { ComppletedPartName: "Teori", isCompleted: false },
  { ComppletedPartName: "Resultater", isCompleted: false },
  { ComppletedPartName: "Diskussion", isCompleted: false },
  { ComppletedPartName: "Fejlkilder", isCompleted: false },
  { ComppletedPartName: "Konklusion", isCompleted: false },
  { ComppletedPartName: "Kilder", isCompleted: false },

  ]

  public QuilData = {
    editorData: "",
    Title: "",
    compltedList: this.ProgressEnum
  }


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private datasevice: DatabaseService, private dialog: MatDialog) {
    this.localDDocoment$ = this.datasevice.GetDocomentHtml(sessionStorage.getItem("username") as string, (this.data.docoment as D_Document).getId());
    this.datasevice.EditorDocoment$.subscribe(x => {
      if (this.QuilData.editorData != x.getData()) {
        this.QuilData.Title = x.getTitle();
        this.QuilData.editorData = (x.getData());
        x.getCompletedList().forEach((x, y) => {
          console.log("CompleteList ", x, y);
          this.check(x);
        });
      }
      this.spinner.hide();
    })

    this.spinner.show();
  }

  ngOnInit(): void {
    this.QuilData.Title = "";
    this.QuilData.editorData = "";
  }

  public onChange(editor: Event | any) {
    if (this.localDDocoment$.value.getId() > 0) {
      this.localDDocoment$.value.setTitle(this.QuilData.Title);
      this.localDDocoment$.value.clearCompletedList();

      //#region checkList
      if (this.QuilData.compltedList[0].isCompleted) {
        this.localDDocoment$.value.addCompleted(this.QuilData.compltedList[0].ComppletedPartName)
      } if (this.QuilData.compltedList[1].isCompleted) {
        this.localDDocoment$.value.addCompleted(this.QuilData.compltedList[1].ComppletedPartName)
      } if (this.QuilData.compltedList[2].isCompleted) {
        this.localDDocoment$.value.addCompleted(this.QuilData.compltedList[2].ComppletedPartName)
      } if (this.QuilData.compltedList[3].isCompleted) {
        this.localDDocoment$.value.addCompleted(this.QuilData.compltedList[3].ComppletedPartName)
      } if (this.QuilData.compltedList[4].isCompleted) {
        this.localDDocoment$.value.addCompleted(this.QuilData.compltedList[4].ComppletedPartName)
      } if (this.QuilData.compltedList[5].isCompleted) {
        this.localDDocoment$.value.addCompleted(this.QuilData.compltedList[5].ComppletedPartName)
      } if (this.QuilData.compltedList[6].isCompleted) {
        this.localDDocoment$.value.addCompleted(this.QuilData.compltedList[6].ComppletedPartName)
      } if (this.QuilData.compltedList[7].isCompleted) {
        this.localDDocoment$.value.addCompleted(this.QuilData.compltedList[7].ComppletedPartName)
      } if (this.QuilData.compltedList[8].isCompleted) {
        this.localDDocoment$.value.addCompleted(this.QuilData.compltedList[8].ComppletedPartName)
      } if (this.QuilData.compltedList[9].isCompleted) {
        this.localDDocoment$.value.addCompleted(this.QuilData.compltedList[9].ComppletedPartName)
      } if (this.QuilData.compltedList[10].isCompleted) {
        this.localDDocoment$.value.addCompleted(this.QuilData.compltedList[10].ComppletedPartName)
      }
      //#endregion
      this.localDDocoment$.value.setData(editor);
      this.datasevice.UpdateDocoment(sessionStorage.getItem("username")!.toString(), this.localDDocoment$.value);
    }

  }

  closeDialogBox() {
    this.spinner.show();
    this.onChange(null);
    this.localDDocoment$.value.setTitle(this.QuilData.Title);
    // console.log("UpdateDockument", this.localDDocoment$.value)
    // this.datasevice.UpdateDocoment(sessionStorage.getItem("username")!.toString(), this.localDDocoment$.value);
    this.datasevice.GetProjectsTheRigthWay(sessionStorage.getItem("username")!.toString())
    this.dialog.closeAll()

  }

  check(value: string): boolean {

    switch (value) {
      case 'Forside':
        return this.QuilData.compltedList[0].isCompleted = true;
      case 'Formaal':
        return this.QuilData.compltedList[1].isCompleted = true;
      case 'Materiale':
        return this.QuilData.compltedList[2].isCompleted = true;
      case 'Forsoegsopstilling':
        return this.QuilData.compltedList[3].isCompleted = true;
      case 'Sikkerhed':
        return this.QuilData.compltedList[4].isCompleted = true;
      case 'Teori':
        return this.QuilData.compltedList[5].isCompleted = true;
      case 'Resultater':
        return this.QuilData.compltedList[6].isCompleted = true;
      case 'Diskussion':
        return this.QuilData.compltedList[7].isCompleted = true;
      case 'Fejlkilder':
        return this.QuilData.compltedList[8].isCompleted = true;
      case 'Konklusion':
        return this.QuilData.compltedList[9].isCompleted = true;
      case 'Kilder':
        return this.QuilData.compltedList[10].isCompleted = true;
      default:
        return false;


    }


    // return this.localDDocoment$.value.getCompletedList().includes(value, 0);
    // let state = false;
    // this.localDDocoment$.value.getCompletedList().forEach(element => {
    //   if (value.toLowerCase() === element.toLowerCase()) {
    //     state = true;
    //     return
    //   } else {

    //     state = false;
    //   }
    // });
    // return state;
  }

  SetCategoro(event: string) {
    if (!this.localDDocoment$.value.getCompletedList().includes(event)) {
      this.localDDocoment$.value.clearCompletedList();
      this.localDDocoment$.value.setCompletedcount(this.localDDocoment$.value.getCompletedList().length);
      this.localDDocoment$.value.addCompleted(event);
      this.datasevice.UpdateDocoment("", this.localDDocoment$.value);
      console.log("setcat was true", event)
    } else {
      console.log(event)
      // console.log("Find",this.localDDocoment$.value.getCompletedList().find(e=>e==event))
      // console.log("FindIndex",this.localDDocoment$.value.getCompletedList().findIndex(e => e === event));
    }

  }
}

export interface completedPartsAngular {
  ComppletedPartName: string
  isCompleted: boolean
}
