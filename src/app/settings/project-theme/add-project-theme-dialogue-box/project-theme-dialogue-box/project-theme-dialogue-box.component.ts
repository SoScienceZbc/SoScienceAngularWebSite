import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog/';
import { LoadingService } from 'src/app/loading.service';
import { ProjectThemeFormComponent } from '../../add-project-theme-form/project-theme-form/project-theme-form.component';

@Component({
  selector: 'app-project-theme-dialogue-box',
  templateUrl: './project-theme-dialogue-box.component.html',
  styleUrls: ['./project-theme-dialogue-box.component.css']
})
export class ProjectThemeDialogueBoxComponent implements OnInit {

  
  loading$ = this.spinner.loading$;
  constructor(private dilog: MatDialog, private spinner : LoadingService) { 

  }

  ngOnInit(): void {
  }
  
  openDialog() {
    let t = this.dilog.open(ProjectThemeFormComponent,{
      data:{
      }
    });
  }
}
