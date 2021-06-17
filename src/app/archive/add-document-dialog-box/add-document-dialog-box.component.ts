import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog/'
import { D_Document } from 'src/app/generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from 'src/app/loading.service';
import { TextEditorComponent } from 'src/app/TextEditor/TextEditor.component';
import { expandingD_Docs } from '../archive.component';
import { DocumentAddComponent } from '../document-add/document-add.component';
import { ProjectFormComponent } from '../project-form/project-form.component';

@Component({
  selector: 'app-add-document-dialog-box',
  templateUrl: './add-document-dialog-box.component.html',
  styleUrls: ['./add-document-dialog-box.component.css']
})
export class AddDocumentDialogBoxComponent implements OnInit {


  @Input('projectid') projectid!:number
  loading$ = this.spinner.loading$;
  constructor( private dilog: MatDialog , private spinner:LoadingService) {
   }

  ngOnInit(): void {
  }
  testDialog() {
    let t = this.dilog.open(DocumentAddComponent,{
      data:{
        projectid: this.projectid
      }

    });
    t.backdropClick().subscribe(x => {console.log("User click on backdrop")})
  }
}
