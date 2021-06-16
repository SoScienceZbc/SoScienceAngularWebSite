import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/database.service';
import { D_Document } from 'src/app/generated/DataBaseProto/DatabaseProto_pb';

@Component({
  selector: 'app-document-add',
  templateUrl: './document-add.component.html',
  styleUrls: ['./document-add.component.css']
})
export class DocumentAddComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public projectid: any,private databaseserve:DatabaseService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  addNewDocoment(title:string){
    if(title.length > 5){
    let newdoc = new D_Document();
    newdoc.setProjectid(this.projectid.projectid);
    console.log(this.projectid.projectid)
    newdoc.setTitle(title);
    newdoc.setCompletedcount(5);

    this.databaseserve.AddDocument(sessionStorage.getItem("username")!.toString(),newdoc);

      console.log(this.projectid);
      this.dialog.closeAll();
    }
  }

}
