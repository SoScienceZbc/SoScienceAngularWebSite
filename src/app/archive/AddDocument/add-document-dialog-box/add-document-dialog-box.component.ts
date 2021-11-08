import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog/';
import { LoadingService } from 'src/app/loading.service';
import { DocumentAddComponent } from '../document-add/document-add.component';

@Component({
  selector: 'app-add-document-dialog-box',
  templateUrl: './add-document-dialog-box.component.html',
  styleUrls: ['./add-document-dialog-box.component.css']
})
export class AddDocumentDialogBoxComponent implements OnInit {


  @Input('projectid') projectid!:number
  loading$ = this.spinner.loading$;
  constructor( private dilog: MatDialog , private spinner:LoadingService) {
   }

  ngOnInit(): void {
  }
  testDialog() {
    let t = this.dilog.open(DocumentAddComponent,{
      data:{
        projectid: this.projectid
      }

    });
    t.backdropClick().subscribe(x => {console.log("User click on backdrop")})
  }
}
