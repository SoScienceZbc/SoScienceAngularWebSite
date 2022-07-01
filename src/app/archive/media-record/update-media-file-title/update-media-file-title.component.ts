import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MediaServiceService } from 'src/app/media-service.service';

@Component({
  selector: 'app-update-media-file-title',
  templateUrl: './update-media-file-title.component.html',
  styleUrls: ['./update-media-file-title.component.css']
})
export class UpdateMediaFileTitleComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private mediaservice: MediaServiceService, private dialog: MatDialog)
  {

  }
  public title = "";

  ngOnInit(): void {
  }

  CloseDialog(){
    this.dialog.closeAll();
  }

  saveTitle() {
    this.mediaservice.UpdateMedia(this.data.mediaid, this.title);
    this.dialog.closeAll();
  }

  setTitle(){
    if(this.title.length < 4 || this.title.length > 40){
      return true;
    }
    else{
      return false;
    }
  }
}
