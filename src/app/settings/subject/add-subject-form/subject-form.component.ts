import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/database.service';
import { D_Subject, D_Subjects } from 'src/app/generated/DataBaseProto/DataBaseProto_pb';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-subject-form',
  templateUrl: './subject-form.component.html',
  styleUrls: ['./subject-form.component.css']
})
export class SubjectFormComponent implements OnInit {

  newSubjectFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(25)
  ]);

  newSubjectGroup = new FormGroup({
    subjectName:this.newSubjectFormControl
  })

  constructor(private dataservice:DatabaseService,private dialog:MatDialog,private spinner:LoadingService) { }

  ngOnInit(): void {
  }
 

  CloseDialog(){
    this.dialog.closeAll()
  }
  
  getErrorMessage() {

    if (this.newSubjectFormControl.hasError('required')) {
      return 'Indtast navn på fag';
    } else if (this.newSubjectFormControl.hasError('minlength')) {
      return 'Fagets navn skal minimum være 4 Karaktere langt'
    } else if (this.newSubjectFormControl.hasError('maxlength')) {
      return 'Fagets navn må maks være 25 Karaktere lang.'
    }
    return this.newSubjectFormControl.hasError('pattern') ? 'noget gik galt prøv igen' : '';
  }

  AddSubject(titel: string){
    if(titel.length >= 4){

      const event = new Date(Date.now());
      let subject = new D_Subject();
      let name = sessionStorage.getItem("Token");

      subject.setName(titel);

      this.dataservice.AddSubject(subject,name!);
      this.dialog.closeAll();
      this.spinner.show();


      //console.log(Date.now().toLocaleString('en-GB'));

    }
  }
}
