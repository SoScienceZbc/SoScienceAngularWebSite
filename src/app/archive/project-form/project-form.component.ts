import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/database.service';
import { D_Project } from 'src/app/generated/DataBaseProto/DatabaseProto_pb';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  constructor(private dataservice:DatabaseService,private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  AddNewProject(titel:string){
    if(titel.length > 5){

      let d = new D_Project();
      d.setName(titel);
      this.dataservice.AddProject(sessionStorage.getItem("username")!,d);
      this.dialog.closeAll();
      console.log("ja")
    }
  }
}
