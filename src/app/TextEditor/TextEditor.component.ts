import { ProviderAst } from '@angular/compiler';
import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideRoutes } from '@angular/router';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Any } from '@ngx-grpc/well-known-types';
import { BehaviorSubject, observable, Observable } from 'rxjs';
import { DatabaseService } from '../database.service';
import { D_Document } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from '../loading.service';


@Component({
  selector: 'app-TextEditor',
  templateUrl: './TextEditor.component.html',
  styleUrls: ['./TextEditor.component.css']
})
export class TextEditorComponent implements OnInit {
  localDDocoment: BehaviorSubject<D_Document> = new BehaviorSubject<D_Document>(new D_Document);
  localHtmltext: string = "";
  spinner: LoadingService = new LoadingService();
  loadingText$ = this.spinner.loading$;
  title: string | any;

  public Editor = ClassicEditor;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private datasevice: DatabaseService, private dialog: MatDialog) {
    this.localDDocoment = this.datasevice.GetDocomentHtml(sessionStorage.getItem("username") as string, (this.data.docoment as D_Document).getId());

  }

  ngOnInit() {
    this.localDDocoment.subscribe(x => {
      this.title = x.getTitle();
      console.log("data", x.getData())
      if (x.getData().length > 0) {
        console.log(x.getData());
        this.localHtmltext = x.getData();
        this.localHtmltext += "<h1>ARgh!!</h1>"
        // this.localHtmltext = x.getData();
        // console.log(this.Editor.getData());
        this.spinner.hide();
      }
    })
    this.spinner.show();

    // console.log("This is from ckeditor",this.data)
  }
  public onChange(editor: ChangeEvent) {
    editor.editor.setData("<p>This is from onchange</p>")
    console.log(editor.editor.getData())

  }

  closeDialogBox() {

    this.dialog.closeAll()

  }

}
