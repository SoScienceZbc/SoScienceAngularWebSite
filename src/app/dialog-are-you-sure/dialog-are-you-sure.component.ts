import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from '../database.service';
import { D_Document, D_Project } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from '../loading.service';

@Component({
  selector: 'app-dialog-are-you-sure',
  templateUrl: './dialog-are-you-sure.component.html',
  styleUrls: ['./dialog-are-you-sure.component.css']
})
export class DialogAreYouSureComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataservice: DatabaseService, private spinner: LoadingService, private dialogbox: MatDialog) {
  }

  ngOnInit(): void {
  }

  ConfirmDelete() {
    // console.log(this.data.docoment)
    if (this.data.type == "D") {
      this.spinner.show();
      console.log("This is type Docoment")
      this.dataservice.RemoveDocoment(this.data.docoment, this.data.docoment.getProjectid());
      this.dialogbox.closeAll();
    } else if (this.data.type == "P") {
      console.log("This is type D_project");
      this.spinner.show();
      this.dataservice.DeleteProject(this.data.docoment, sessionStorage.getItem("username")!.toString());
      this.dialogbox.closeAll();
    }else if(this.data.type == "U"){
      this.dataservice.UpdateProject(this.data.docoment,sessionStorage.getItem("username")!.toString());
    }

  }
  NonConfirmDelete() {
    this.dialogbox.closeAll();
  }

}
