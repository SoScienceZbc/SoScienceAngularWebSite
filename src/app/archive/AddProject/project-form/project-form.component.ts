import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/database.service';
import { D_Project } from 'src/app/generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from 'src/app/loading.service';

interface DropDoneItem {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  subjects: DropDoneItem[] = [];
  themes: DropDoneItem[] = [];

  selectedSubjectFormControl = new FormControl(null, [
    Validators.required,
  ]);  
  selectedThemeFormControl = new FormControl(null, [
    Validators.required,
  ]);
  ProjectNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(25)
  ]);

  newprojectFormgroup = new FormGroup({
    projectName:this.ProjectNameFormControl,
    projectTheme:this.selectedThemeFormControl,
    projectSubject:this.selectedSubjectFormControl
  })


  constructor(private dataservice:DatabaseService,private dialog:MatDialog,private spinner:LoadingService) { 
    dataservice.GetSubject(sessionStorage.getItem("Token")!).subscribe(data =>{
      data.getSubjectList().forEach(subject => {
        this.subjects.push({value : subject.getId(), viewValue : subject.getName()});
      }); 
      this.selectedSubjectFormControl.setValue(null);
    })
  }

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

  GetProjectThemes(){
    console.log(this.selectedSubjectFormControl.value);
  }

  AddNewProject(){
    if(this.ProjectNameFormControl.value.length >= 4){
      this.dataservice.AddProject(this.ProjectNameFormControl.value,this.selectedThemeFormControl.value);
      this.dialog.closeAll();
      this.spinner.show();
    }
  }
}
