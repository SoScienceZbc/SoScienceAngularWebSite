import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject, Observable, observable } from 'rxjs';
import { MediaServiceService } from 'src/app/media-service.service';
import { RetrieveMediaReply } from 'src/app/protos/RemoteMediaProto_pb';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-display-media-file',
  templateUrl: './display-media-file.component.html',
  styleUrls: ['./display-media-file.component.css']
})
export class DisplayMediaFileComponent implements AfterViewInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog, private mediaservice: MediaServiceService, private sanitizer: DomSanitizer)
  {

  }

  public title = "";
  public videoSrc!: SafeUrl;


  ngAfterViewInit(): void {
    //this.LoadContent();
  }

  async LoadContent(){
    console.log(this.data.mediatitle);
    this.title = this.data.mediatitle;

    let tempArray: Uint8Array;
  this.mediaservice.GetMedia(this.data.mediaid).subscribe( x => {
    tempArray = x.getRetrievedblobdata_asU8()
    // console.log("tempArray: " + tempArray)
    if(tempArray.length > 0) {
      var newBuffer = tempArray.buffer
      var dataView = new DataView(newBuffer);
      var blob = new Blob([dataView], {type: 'video/x-matroska;codecs=avc1,opus'})
      this.videoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob))
      console.log("blob length: "+ blob.size)
      console.log(this.videoSrc);
    }
    })
  }

  CloseDialog() {
    this.dialog.closeAll();
  }
}
