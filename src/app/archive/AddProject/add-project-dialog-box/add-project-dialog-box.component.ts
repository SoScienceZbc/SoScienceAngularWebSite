import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog/'
import { LoadingService } from 'src/app/loading.service';
import { ProjectFormComponent } from '../project-form/project-form.component';
@Component({
  selector: 'app-add-project-dialog-box',
  templateUrl: './add-project-dialog-box.component.html',
  styleUrls: ['./add-project-dialog-box.component.css']
})
export class AddProjectDialogBoxComponent implements OnInit {

  @Input('projectid') projectid!:number
  loading$ = this.spinner.loading$;
  constructor( private dilog: MatDialog , private spinner:LoadingService) {
   }

  ngOnInit(): void {
  }

  testDialog() {
    this.dilog.open(ProjectFormComponent,{
      data:{
        projectid: this.projectid
      }

    });
  }
}
