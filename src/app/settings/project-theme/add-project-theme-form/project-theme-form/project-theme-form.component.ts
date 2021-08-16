import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/database.service';
import { DatePipe } from '@angular/common';
import { LoadingService } from 'src/app/loading.service';

interface Subject {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-project-theme-form',
  templateUrl: './project-theme-form.component.html',
  styleUrls: ['./project-theme-form.component.css']
})

export class ProjectThemeFormComponent implements OnInit {
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(25)
  ]);  
  selectedFormControl = new FormControl(0, [
    Validators.required,
  ]);
  datetimeFormControl =  new FormControl(this.datePipe.transform(new Date(),"yyyy-MM-ddThh:mm"),[
    Validators.required,
  ])
  projectthemeGroup = new FormGroup({
    'projectThemeName' : this.nameFormControl,
    'subjectSelect' : this.selectedFormControl,
    'datetimeSelect' : this.datetimeFormControl
  })

  subjects: Subject[] = [];

  selectedValue: number;
  
  constructor(private dialog:MatDialog, private dbService : DatabaseService, private datePipe : DatePipe,private spinner:LoadingService) { 
    this.selectedValue = -1;
    dbService.GetSubject(sessionStorage.getItem("Token")!).subscribe(data =>{
      data.getSubjectList().forEach(subject => {
        this.subjects.push({value : subject.getId(), viewValue : subject.getName()});
      }); 
      this.selectedFormControl.setValue(1);
    })
  }
  
  getErrorMessage() {

    if (this.nameFormControl.hasError('required')) {
      return 'Indtast navn på dit projekt forløb';
    } else if (this.nameFormControl.hasError('minlength')) {
      return 'Projekt forløbs navn skal minimum være 4 Karaktere langt'
    } else if (this.nameFormControl.hasError('maxlength')) {
      return 'Projekt forløbs navn må maks være 25 Karaktere lang.'
    }
    return this.nameFormControl.hasError('pattern') ? 'noget gik galt prøv igen' : '';
  }

  ngOnInit(): void {

  }

  addProjectTheme() : void{
    this.dbService.AddProjectTheme(this.selectedFormControl.value,this.datetimeFormControl.value,this.nameFormControl.value);
    this.dialog.closeAll();
    this.spinner.show();
  }

  CloseDialog(){
    this.dialog.closeAll()
  }
}
