import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  ProjectNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(25)
  ]);

  newprojectFormgroup = new FormGroup({
    projectName:this.ProjectNameFormControl
  })


  constructor(private dataservice:DatabaseService,private dialog:MatDialog,private spinner:LoadingService) { }

  ngOnInit(): void {
  }

  CloseDialog(){
    this.dialog.closeAll()
  }

  getErrorMessage() {

    if (this.ProjectNameFormControl.hasError('required')) {
      return 'indtast et Projekt navn';
    } else if (this.ProjectNameFormControl.hasError('minlength')) {
      return 'et Projekt navn er normalt over 4 Karaktere langt'
    } else if (this.ProjectNameFormControl.hasError('maxlength')) {
      return 'et Projekt navn er normalt ikke over 25 Karaktere lang.'
    }
    return this.ProjectNameFormControl.hasError('pattern') ? 'noget gik galt prøv igen' : '';
  }

  AddNewProject(titel:string){
    if(titel.length >= 4){

      const event = new Date(Date.now());
      let d = new D_Project();
      let name = sessionStorage.getItem("Token");

      d.setName(titel);
      d.setCompleted(false);
      d.setEnddate(event.toLocaleString('en-GB', { timeZone: 'GMT' }));
      d.setLastedited(event.toLocaleString('en-GB', { timeZone: 'GMT' }));
      d.setProjectthemeid(1);
      console.log(d);
      console.log(event.toLocaleString('en-GB', { timeZone: 'GMT' }));

      this.dataservice.AddProject((name as string),d);
      this.dialog.closeAll();
      this.spinner.show();


      //console.log(Date.now().toLocaleString('en-GB'));

    }
  }
}
