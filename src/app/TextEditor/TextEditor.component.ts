
import { Component, Inject, Injectable, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChangeEvent, CKEditorComponent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { BehaviorSubject, observable, Observable, of } from 'rxjs';
import { DatabaseService } from '../database.service';
import { D_Document } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from '../loading.service';
// import ObservableMixin from '@ckeditor/ckeditor5-utils/src/observablemixin';
// import mix from '@ckeditor/ckeditor5-utils/src/mix';


@Component({
  selector: 'app-TextEditor',
  templateUrl: './TextEditor.component.html',
  styleUrls: ['./TextEditor.component.css']
})
export class TextEditorComponent implements OnInit {

  @ViewChild("myckeditor") ckeditor: any;

  localDDocoment$: BehaviorSubject<D_Document> = new BehaviorSubject<D_Document>(new D_Document);
  localDDocoment: D_Document = this.localDDocoment$.value;
  localHtmltext: BehaviorSubject<string> = new BehaviorSubject<string>("<p>old data</p>");
  spinner: LoadingService = new LoadingService();
  loadingText$ = this.spinner.loading$;
  title: string | any;
  ckeConfig: any;

  public dataModel = {
    editorData: "<p>Standart modal</p>",

  }

  public datamodel = {
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

  public Editor = ClassicEditor;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private datasevice: DatabaseService, private dialog: MatDialog) {
    this.localDDocoment$ = this.datasevice.GetDocomentHtml(sessionStorage.getItem("username") as string, (this.data.docoment as D_Document).getId());
    this.datasevice.EditorDocoment$.subscribe(x => {
      if (this.dataModel.editorData != x.getData()) {
        this.title = x.getTitle();
        this.dataModel.editorData = (x.getData());
      }
      this.spinner.hide();
    })
    this.ckeConfig = {
      allowedContent: true,
      forcePasteAsPlainText: true
    };

    this.spinner.show();
  }

  ngOnInit() {
  }
  public onChange(editor: ChangeEvent | any) {

    // console.log("editor.event", editor)
    // this.dataModel.editorData = this.dataModel.editorData;
    if (this.localDDocoment$.value.getId() > 0) {

      // console.log("localdocoment", this.localDDocoment$.value);
      this.localDDocoment$.value.setData(editor);
      this.datasevice.UpdateDocoment(sessionStorage.getItem("username")!.toString(), this.localDDocoment$.value);
    }

  }

  closeDialogBox() {
    // this.datasevice.UpdateDocoment(sessionStorage.getItem("username")!.toString(),);
    this.dialog.closeAll()

  }
  check(value: string): boolean {


    switch (value) {
      case 'Forside':
        this.datamodel.Forside = true;
        break;
      case 'Formaal':
        this.datamodel.Formaal = true;
        break;
      case 'Forside':
        this.datamodel.Materiale = true;
        break;
      case 'Forside':
        this.datamodel.Forsoegsopstilling = true;
        break;
      case 'Forside':
        this.datamodel.Sikkerhed = true;
        break;
      case 'Forside':
        this.datamodel.Teori = true;
        break;
      case 'Forside':
        this.datamodel.Resultater = true;
        break;
      case 'Forside':
        this.datamodel.Diskussion = true;
        break;
      case 'Forside':
        this.datamodel.Fejlkilder = true;
        break;
      case 'Forside':
        this.datamodel.Konklusion = true;
        break;
      case 'Forside':
        this.datamodel.Kilder = true;
        break;


    }


    return this.localDDocoment$.value.getCompletedList().includes(value);
    let state = false;
    this.localDDocoment$.value.getCompletedList().forEach(element => {
      if (value.toLowerCase() === element.toLowerCase()) {
        state = true;
        return
      } else {

        state = false;
      }
    });
    return state;
  }

  SetCategoro(event: string) {
    if (!this.localDDocoment$.value.getCompletedList().includes(event)) {
      this.localDDocoment$.value.addCompleted(event);
    } else {
      console.log(event)
      // console.log("Find",this.localDDocoment$.value.getCompletedList().find(e=>e==event))
      // console.log("FindIndex",this.localDDocoment$.value.getCompletedList().findIndex(e => e === event));
    }

  }

}
