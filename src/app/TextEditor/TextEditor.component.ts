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

  public QuilData = {
    editorData: "",
    Title: "",
    compltedList: {
      Forside: false,
      Formaal: false,
      Materiale: false,
      Forsoegsopstilling: false,
      Sikkerhed: false,
      Teori: false,
      Resultater: false,
      Diskussion: false,
      Fejlkilder: false,
      Konklusion: false,
      Kilder: false,
    }
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

    this.QuilData.compltedList = {
      Forside: false,
      Formaal: false,
      Materiale: false,
      Forsoegsopstilling: false,
      Sikkerhed: false,
      Teori: false,
      Resultater: false,
      Diskussion: false,
      Fejlkilder: false,
      Konklusion: false,
      Kilder: false,
    }
    this.QuilData.Title = "";
    this.QuilData.editorData = "";
  }

  public onChange(editor: Event | any) {

    // console.log("editor.event", editor)
    // this.QuilData.editorData = this.QuilData.editorData;
    if (this.localDDocoment$.value.getId() > 0) {
      this.localDDocoment$.value.setTitle(this.QuilData.Title);
      if (!this.localDDocoment$.value.getCompletedList().includes("Forside")) {
        this.localDDocoment$.value.addCompleted("Forside")
      }
      this.localDDocoment$.value.setData(editor);
      this.localDDocoment$.value.setCompletedcount(0);
      console.log(this.localDDocoment$.value.getCompletedcount());
      this.datasevice.UpdateDocoment(sessionStorage.getItem("username")!.toString(), this.localDDocoment$.value);
    }

  }

  closeDialogBox() {
    this.localDDocoment$.value.setTitle(this.QuilData.Title);
    this.localDDocoment$.value.setCompletedcount(0);
    this.localDDocoment$.value.clearCompletedList();
    this.datasevice.UpdateDocoment(sessionStorage.getItem("username")!.toString(), this.localDDocoment$.value);
    this.dialog.closeAll()

  }

  check(value: string): boolean {

    switch (value) {
      case 'Forside':
        this.localDDocoment$.value.getCompletedList().forEach(x => {
          if (x !== value) {
            this.localDDocoment$.value.addCompleted('Forside');

          }
        })
        return this.QuilData.compltedList.Forside = true;
      case 'Formaal':
        return this.QuilData.compltedList.Formaal = true;
      case 'Materiale':
        return this.QuilData.compltedList.Materiale = true;
      case 'Forsoegsopstilling':
        return this.QuilData.compltedList.Forsoegsopstilling = true;
      case 'Sikkerhed':
        return this.QuilData.compltedList.Sikkerhed = true;
      case 'Teori':
        return this.QuilData.compltedList.Teori = true;
      case 'Resultater':
        return this.QuilData.compltedList.Resultater = true;
      case 'Diskussion':
        return this.QuilData.compltedList.Diskussion = true;
      case 'Fejlkilder':
        return this.QuilData.compltedList.Fejlkilder = true;
      case 'Konklusion':
        return this.QuilData.compltedList.Konklusion = true;
      case 'Kilder':
        return this.QuilData.compltedList.Kilder = true;
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
