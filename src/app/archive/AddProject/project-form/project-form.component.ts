import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/database.service';
import { D_Project } from 'src/app/generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  constructor(private dataservice:DatabaseService,private dialog:MatDialog,private spinner:LoadingService) { }

  ngOnInit(): void {
  }
  AddNewProject(titel:string){
    if(titel.length > 5){

      const event = new Date(Date.now());
      let d = new D_Project();
      let name = sessionStorage.getItem("username");

      d.setName(titel);
      d.setCompleted(false);
      d.setEnddate(event.toLocaleString('en-GB', { timeZone: 'GMT' }));
      d.setLastedited(event.toLocaleString('en-GB', { timeZone: 'GMT' }));

      console.log(event.toLocaleString('en-GB', { timeZone: 'GMT' }));

      this.dataservice.AddProject((name as string),d);
      this.dialog.closeAll();
      this.spinner.show();


      //console.log(Date.now().toLocaleString('en-GB'));

    }
  }
}
