import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MAT_DIALOG_DATA } from '@angular/material/dialog/'
import { D_Document } from 'src/app/generated/DataBaseProto/DatabaseProto_pb';
import { LoadingService } from 'src/app/loading.service';
import { TextEditorComponent } from 'src/app/TextEditor/TextEditor.component';
import { expandingD_Docs } from '../archive.component';

@Component({
  selector: 'app-TextEditorDilogBox',
  templateUrl: './TextEditorDilogBox.component.html',
  styleUrls: ['./TextEditorDilogBox.component.css']
})
export class TextEditorDilogBoxComponent implements OnInit {

  @Input('DocomentToEdite') datas!:D_Document
  loading$ = this.spinner.loading$;
  isShow = false;
  constructor( private dilog: MatDialog , private spinner:LoadingService) {
   }

  ngOnInit() {

  }

  testDialog() {
    // console.log(this.datas);
    let t = this.dilog.open(TextEditorComponent,{
      data:{
        docoment: this.datas
      }

    });
    this.isShow = true;
    t.backdropClick().subscribe(x => {console.log("User click on backdrop")})
  }

}
