
import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
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
  localDDocoment: BehaviorSubject<D_Document> = new BehaviorSubject<D_Document>(new D_Document);
  localHtmltext: BehaviorSubject<string> = new BehaviorSubject<string>("<p>old data</p>");
  spinner: LoadingService = new LoadingService();
  loadingText$ = this.spinner.loading$;
  title: string | any;
  public model = {
    editorData: "<p>dasfv</p>"
  }

  public Editor = ClassicEditor;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private datasevice: DatabaseService, private dialog: MatDialog) {
    this.localDDocoment = this.datasevice.GetDocomentHtml(sessionStorage.getItem("username") as string, (this.data.docoment as D_Document).getId());
    this.datasevice.EditorDocoment$.subscribe(x => {
      if (this.model.editorData != x.getData()) {
        console.log(x);
        this.model.editorData = (x.getData());

      }
    })
    this.spinner.show();
  }

  ngOnInit() {

    this.model.editorData = ("<p>argh warms</p>");
    this.localDDocoment.subscribe(x => {
      this.title = x.getTitle();
      // this.model.editorData.next(x.getData())
      if (x.getData().length > 0) {
        this.spinner.hide();
      } else if (x.getTitle().length > 3) {
        this.spinner.hide();

      }
    })

    // console.log("This is from ckeditor",this.data)
  }
  public onChange(editor: ChangeEvent) {
    editor.editor.setData("<p>This is from onchange</p>")
    console.log(editor.editor.getData())

  }

  closeDialogBox() {
    // this.datasevice.UpdateDocoment(sessionStorage.getItem("username")!.toString(),);
    this.dialog.closeAll()

  }
  check(value: string): boolean {
    let state = false;
    this.localDDocoment.value.getCompletedList().forEach(element => {
      if (value.toLowerCase() == element.toLowerCase()) {
        return state = true;
      }
      return state = false;
    });
    return state;
  }

}
