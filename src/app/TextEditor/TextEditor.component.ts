import { ProviderAst } from '@angular/compiler';
import { Component, Inject, Injectable, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { provideRoutes } from '@angular/router';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Any } from '@ngx-grpc/well-known-types';
import { observable, Observable } from 'rxjs';
import { DatabaseService } from '../database.service';
import { D_Document } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from '../loading.service';


@Component({
  selector: 'app-TextEditor',
  templateUrl: './TextEditor.component.html',
  styleUrls: ['./TextEditor.component.css']
})
export class TextEditorComponent implements OnInit {
  localDDocoment: Observable<D_Document> = new Observable<D_Document>();
  localHtmltext: string | any;
  spinner:LoadingService = new LoadingService();
  loadingText$ = this.spinner.loading$;

  public Editor = ClassicEditor;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private datasevice: DatabaseService) {

    this.localDDocoment = this.datasevice.GetDocomentHtml(sessionStorage.getItem("username") as string, (this.data.docoment as D_Document).getId());
    this.localDDocoment.subscribe(x => {
      if (x.getData().length > 0) {
        // this.localHtmltext = "<h1>ARgh!!</h1>"
        console.log("<p>",x.getData(),"</p>")
        // this.localHtmltext = x.getData();
        // console.log(this.Editor.getData());
        this.spinner.hide();
      }
    })
  }

  ngOnInit() {
    this.spinner.show();

    // console.log("This is from ckeditor",this.data)
  }
  public onChange(editor:ChangeEvent){
    editor.editor.setData("<p>This is from onchange</p>")
    console.log(editor.editor.getData())

  }

}
