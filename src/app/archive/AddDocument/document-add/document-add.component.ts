import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DatabaseService } from 'src/app/database.service';
import { D_Document } from 'src/app/protos/DatabaseProto_pb';
import { LoadingService } from 'src/app/loading.service';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-document-add',
  templateUrl: './document-add.component.html',
  styleUrls: ['./document-add.component.css']
})
export class DocumentAddComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public projectid: any,private databaseserve:DatabaseService,private dialog:MatDialog,private spinner:LoadingService) { }

  addDocuFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(30)
  ]);
  addDocuFormGroup = new UntypedFormGroup({
    formcontrol: this.addDocuFormControl,
  })

  ngOnInit(): void {
  }

  CloseDialog(){
    this.dialog.closeAll();
  }
  getError(){
    if(this.addDocuFormControl.hasError('minlength')){
      return "Titel for kort"
    }
    else if(this.addDocuFormControl.hasError('maxlength')){
      return "Titel for lang"
    }
    return "Mangler titel";
  }
  addNewDocoment(title:string){

    let newdoc = new D_Document();
    let name = sessionStorage.getItem("Token");



    newdoc.setProjectid(this.projectid.projectid);
    console.log(this.projectid.projectid)
    newdoc.setTitle(title);
    // newdoc.setData("<p>skriv noget tjekket og awsome. og tro på den vindeskablig fremgangs måde</p>")
    // newdoc.setCompletedcount(2);

    this.databaseserve.AddDocument(newdoc);
    this.spinner.show();

      // console.log(this.projectid);

      this.dialog.closeAll();

  }

}
