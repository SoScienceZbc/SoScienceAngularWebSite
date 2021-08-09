import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-project-theme-form',
  templateUrl: './project-theme-form.component.html',
  styleUrls: ['./project-theme-form.component.css']
})
export class ProjectThemeFormComponent implements OnInit {

  constructor() { }

  ThemeProjectNameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(25)
  ]);
  newthemeprojectFormgroup = new FormGroup({
    themeprojectName:this.ThemeProjectNameFormControl
  })
  
  getErrorMessage() {

    if (this.ThemeProjectNameFormControl.hasError('required')) {
      return 'indtast et Projekt Tema navn';
    } else if (this.ThemeProjectNameFormControl.hasError('minlength')) {
      return 'et Projekt Tema navn er normalt over 4 Karaktere langt'
    } else if (this.ThemeProjectNameFormControl.hasError('maxlength')) {
      return 'et Projekt Tema navn er normalt ikke over 25 Karaktere lang.'
    }
    return this.ThemeProjectNameFormControl.hasError('pattern') ? 'noget gik galt prøv igen' : '';
  }
  ngOnInit(): void {
  }

}
