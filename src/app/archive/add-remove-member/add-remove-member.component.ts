import { Component, Inject, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/database.service';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-add-remove-member',
  templateUrl: './add-remove-member.component.html',
  styleUrls: ['./add-remove-member.component.css']
})
export class AddRemoveMemberComponent implements OnInit {
  usernameFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(25)
  ]);  
  formGroup = new UntypedFormGroup({
    'Username' : this.usernameFormControl,
  })
  addMemberStyle : Boolean
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dataservice: DatabaseService, private spinner: LoadingService, private dialogbox: MatDialog) { 
    this.addMemberStyle = data.addMemberStyle;
  }

  ngOnInit(): void {
  }


  removeMember(){
    this.dataservice.RemoveProjectMember(this.data.id, this.usernameFormControl.value);
    this.dialogbox.closeAll();
    this.spinner.show();
  }
  addMember(){
    this.dataservice.AddProjectMember(this.data.id, this.usernameFormControl.value);
    this.dialogbox.closeAll();
    this.spinner.show();
  }

  getErrorMessage() {

    if (this.usernameFormControl.hasError('required')) {
      return 'Indtast dit projektmedlems username/uni';
    } else if (this.usernameFormControl.hasError('minlength')) {
      return 'dit projektmedlems username/uni skal minimum være 3 Karaktere langt'
    } else if (this.usernameFormControl.hasError('maxlength')) {
      return 'dit projektmedlems username/uni må maks være 25 Karaktere lang.'
    }
    return this.usernameFormControl.hasError('pattern') ? 'noget gik galt prøv igen' : '';
  }
  CloseDialog(){
    this.dialogbox.closeAll()
  }

}