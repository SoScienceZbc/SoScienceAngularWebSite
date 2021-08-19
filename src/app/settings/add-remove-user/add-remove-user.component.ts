import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/database.service';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-add-remove-user',
  templateUrl: './add-remove-user.component.html',
  styleUrls: ['./add-remove-user.component.css']
})
export class AddRemoveUserComponent implements OnInit {
  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(25)
  ]);  
  formGroup = new FormGroup({
    'Username' : this.usernameFormControl,
  })
  addCoTeacherStyle : Boolean
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataservice: DatabaseService, private spinner: LoadingService, private dialogbox: MatDialog) { 
    this.addCoTeacherStyle = data.addCoTeacherStyle;
  }

  ngOnInit(): void {
  }


  removeCoTeacher(){
  }
  addCoTeacher(){
    this.dataservice.AddProjectThemeCoTeacher(this.data.id, this.usernameFormControl.value);
    this.dialogbox.closeAll();
    this.spinner.show();
  }

  getErrorMessage() {

    if (this.usernameFormControl.hasError('required')) {
      return 'Indtast  din ekstra-læres username/uni';
    } else if (this.usernameFormControl.hasError('minlength')) {
      return 'din ekstra-læres username/uni skal minimum være 3 Karaktere langt'
    } else if (this.usernameFormControl.hasError('maxlength')) {
      return 'din ekstra-læres username/uni må maks være 25 Karaktere lang.'
    }
    return this.usernameFormControl.hasError('pattern') ? 'noget gik galt prøv igen' : '';
  }

}
