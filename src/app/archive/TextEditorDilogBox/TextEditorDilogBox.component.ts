import { Component, Inject, Injectable, Input, NgModule, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA,MatDialogModule } from '@angular/material/dialog/'
import { QuillEditorComponent, QuillService } from 'ngx-quill';
import Quill from 'quill';
import { D_Document } from 'src/app/generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from 'src/app/loading.service';
import { TextEditorComponent } from 'src/app/TextEditor/TextEditor.component';
import { AddProjectDialogBoxComponent } from '../AddProject/add-project-dialog-box/add-project-dialog-box.component';
import { ProjectFormComponent } from '../AddProject/project-form/project-form.component';
import { expandingD_Docs } from '../archive.component';

@Injectable({providedIn:'root'})
@Component({
  selector: 'app-TextEditorDilogBox',
  templateUrl: './TextEditorDilogBox.component.html',
  styleUrls: ['./TextEditorDilogBox.component.css']
})
export class TextEditorDilogBoxComponent implements OnInit,OnDestroy {

  @Input('DocomentToEdite') datas?: D_Document
  editorComponet: any;
  loading$ = this.spinner.loading$;
  isShow = false;
  constructor(private dilog: MatDialog, private spinner: LoadingService) {
    // this.dilog.ngOnDestroy();
  }
  ngOnDestroy(): void {
    this.isShow = false;
    // console.log(this.quils.getQuill())
    // this.quils.getQuill().then((x)=> console
    //   .log((x as QuillService)))
  }

  ngOnInit() {
  }

  OpenDialogBox() {
    console.log(this.dilog.openDialogs);
    this.editorComponet =  this.dilog.open(TextEditorComponent, {
      data: {
        docoment: this.datas

      }

    })._containerInstance
    this.isShow = true;
    console.log(this.editorComponet);
    // this.editorComponet.backdropClick().subscribe((x: any) => {
    //   console.log("User click on backdrop",x)
    // })
  }

}
