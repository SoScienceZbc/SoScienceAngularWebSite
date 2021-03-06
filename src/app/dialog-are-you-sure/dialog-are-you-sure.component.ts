import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from '../database.service';
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

    switch (this.data.type) {
      case "D":
        this.spinner.show();
        console.log("This is type Docoment")
        this.dataservice.RemoveDocoment(this.data.docoment, this.data.docoment.getProjectid());
        this.dialogbox.closeAll();
        break;
      case "P":
        console.log("This is type D_project");
        this.spinner.show();
        this.dataservice.DeleteProject(this.data.docoment);
        this.dialogbox.closeAll();
        break;
      case "U":
        this.spinner.show();
        this.data.docoment.setCompleted(true);
        this.dataservice.UpdateProject(this.data.docoment);
        this.dialogbox.closeAll();
        break;
      case "UU":
        this.spinner.show();
        this.data.docoment.setCompleted(false);
        this.dataservice.UpdateProject(this.data.docoment);
        this.dialogbox.closeAll();
        break;
      case "PT":
        this.spinner.show();
        this.dataservice.RemoveProjectTheme(this.data.docoment)
        this.dialogbox.closeAll();
        break;
    }
  }
  NonConfirmDelete() {
    this.dialogbox.closeAll();
  }

}
