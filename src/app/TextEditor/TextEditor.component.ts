
import { AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import Quill from 'quill';
import { BehaviorSubject} from 'rxjs';
import { DatabaseService } from '../database.service';
import { D_Document } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from '../loading.service';
// import *  as customEditor from '../ckedtitor/build/ckeditor';


@Component({
  selector: 'app-TextEditor',
  templateUrl: './TextEditor.component.html',
  styleUrls: ['./TextEditor.component.css']
})
export class TextEditorComponent {

  @ViewChild("editor") editor!: any;

  localDDocoment$: BehaviorSubject<D_Document> = new BehaviorSubject<D_Document>(new D_Document);
  localDDocoment: D_Document = this.localDDocoment$.value;
  localHtmltext: BehaviorSubject<string> = new BehaviorSubject<string>("<p>old data</p>");
  spinner: LoadingService = new LoadingService();
  loadingText$ = this.spinner.loading$;
  title: string | any;

  modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],

      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction

      [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],

      ['clean'],                                         // remove formatting button

      ['link', 'image', 'video']                         // link and image, video
    ]
  };



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


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private datasevice: DatabaseService, private dialog: MatDialog) {
    this.localDDocoment$ = this.datasevice.GetDocomentHtml(sessionStorage.getItem("username") as string, (this.data.docoment as D_Document).getId());
    this.datasevice.EditorDocoment$.subscribe(x => {
      if (this.dataModel.editorData != x.getData()) {
        this.title = x.getTitle();
        this.dataModel.editorData = (x.getData());
      }
      this.spinner.hide();
    })

    this.spinner.show();
  }

  public onChange(editor: Event  | any) {

    // console.log("editor.event", editor)
    // this.dataModel.editorData = this.dataModel.editorData;
    if (this.localDDocoment$.value.getId() > 0) {

      // console.log("localdocoment", this.localDDocoment$.value);
      this.localDDocoment$.value.setData(editor);
      this.datasevice.UpdateDocoment(sessionStorage.getItem("username")!.toString(), this.localDDocoment$.value);
    }

  }

  closeDialogBox() {
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
      this.datasevice.UpdateDocoment("", this.localDDocoment$.value);
      console.log("setcat was true", event)
    } else {
      console.log(event)
      // console.log("Find",this.localDDocoment$.value.getCompletedList().find(e=>e==event))
      // console.log("FindIndex",this.localDDocoment$.value.getCompletedList().findIndex(e => e === event));
    }

  }
  changedEditor(event:any){
    this.editor = event;
console.log("Test oncreate",event);
  }
}
