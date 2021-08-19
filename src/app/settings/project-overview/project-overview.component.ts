import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DatabaseService } from 'src/app/database.service';
import { LoadingService } from 'src/app/loading.service';
import { D_Document, D_Documents, D_Project } from 'src/app/protos/DatabaseProto_pb';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-overview.component.html',
  styleUrls: ['./project-overview.component.css']
})
export class ProjectOverviewComponent implements OnInit {
  project : D_Project

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataservice: DatabaseService, private spinner: LoadingService, private dialogbox: MatDialog) 
  {
    this.project = new D_Project();
    this.project.setName(data.name);
    this.project.setId(data.id);
    this.project.setDocumentsList([]);
    dataservice.GetDocuments(this.project.getId()).subscribe(documents => {
      this.project.setDocumentsList(documents.getDDocumentsList());
      console.log(documents);
      
    })
  }
  ngOnInit(): void {
  }
  CloseDialog(){
    this.dialogbox.closeAll()
  }
}
