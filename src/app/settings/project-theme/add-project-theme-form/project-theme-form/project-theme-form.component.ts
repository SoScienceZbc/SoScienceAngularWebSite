import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

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
  
  projectthemeGroup = new FormGroup({
    projectThemeName:this.nameFormControl
  })

  subjects: Subject[] = [
    {value: 0, viewValue: 'Steak'},
    {value: 1, viewValue: 'Pizza'},
    {value: 2, viewValue: 'Tacos'}
  ];

  selectedValue: number;
  
  constructor(private dialog:MatDialog) { 
    this.selectedValue = 0;
  }
  
  getErrorMessage() {

    if (this.nameFormControl.hasError('required')) {
      return 'Indtast navn på dit projekt forløb';
    } else if (this.nameFormControl.hasError('minlength')) {
      return ' projekt forløbs navn skal minimum være 4 Karaktere langt'
    } else if (this.nameFormControl.hasError('maxlength')) {
      return ' projekt forløbs navn må maks være 25 Karaktere lang.'
    }
    return this.nameFormControl.hasError('pattern') ? 'noget gik galt prøv igen' : '';
  }

  ngOnInit(): void {
  }
  testDialog(): void{
    console.log(this.selectedValue);
  }
  CloseDialog(){
    this.dialog.closeAll()
  }
}
