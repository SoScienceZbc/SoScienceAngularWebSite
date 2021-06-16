import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog/'
import { D_Document } from 'src/app/generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from 'src/app/loading.service';
import { TextEditorComponent } from 'src/app/TextEditor/TextEditor.component';
import { expandingD_Docs } from '../archive.component';
import { ProjectFormComponent } from '../project-form/project-form.component';
@Component({
  selector: 'app-add-project-dialog-box',
  templateUrl: './add-project-dialog-box.component.html',
  styleUrls: ['./add-project-dialog-box.component.css']
})
export class AddProjectDialogBoxComponent implements OnInit {

  @Input('DocomentToEdite') datas!:D_Document
  loading$ = this.spinner.loading$;
  constructor( private dilog: MatDialog , private spinner:LoadingService) {
   }

  ngOnInit(): void {
  }

  testDialog() {

    let t = this.dilog.open(ProjectFormComponent,{});
    t.backdropClick().subscribe(x => {console.log("User click on backdrop")})
  }
}
