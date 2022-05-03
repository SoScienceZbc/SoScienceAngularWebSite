import { AfterViewInit, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { delay } from 'rxjs/operators';
import { MediaStreamDirective } from './mediastreamDirective/media-stream.directive';
import { DatabaseService } from 'src/app/database.service';
import { MediaServiceService } from 'src/app/media-service.service';
import { MediaRequest } from 'src/app/protos/RemoteMediaProto_pb';

@Component({
  selector: 'app-record-video',
  templateUrl: './record-video.component.html',
  styleUrls: ['./record-video.component.css']
})
export class RecordVideoComponent implements AfterViewInit{

  @ViewChild(MediaStreamDirective)
  public mediaStream!: MediaStreamDirective;
  // @Input('projectid') projectid!:number;

  public videoSrc!: SafeUrl;
  public videoBlob = {} as Blob;
  constructor(@Inject(MAT_DIALOG_DATA) public projectid: any, private dialog: MatDialog, private sanitizer: DomSanitizer, private mediaService: MediaServiceService) { }

  ngAfterViewInit(): void {
    this.mediaStream.play();

  }
  public onVideo(data: Blob): void {
    this.videoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
    this.videoBlob = data;
  }
  startCamera(){
    this.mediaStream.play();
  }
  startRecord(){
    this.mediaStream.recordStart();
  }
  stopRecord(){
    this.mediaStream.recordStop();
    this.mediaStream.stop();
    console.log(this.videoSrc)
    console.log("projectid" + this.projectid.projectid);
  }
  clearRecording(){
    this.videoSrc = "";
  }
  async save(){
    if(this.videoBlob) {
      let newVid = new MediaRequest();
      newVid.setProjectid(this.projectid.projectid)
      newVid.setTitle("New recorded video")
      newVid.setType("video");

      //Make Uint8array
      var buffer = await new Response(this.videoBlob).arrayBuffer();
      const array = new Uint8Array(buffer);
      newVid.setBlobdata(array);


      //Simulated retrieved blob from DB
      var tempArray = array.subarray(0, array.length)
      var newBuffer = tempArray.buffer
      var dataView = new DataView(newBuffer);
      var blob = new Blob([dataView], { })
      this.videoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob))

      this.mediaService.AddRecordedMedia(newVid);
    }
  }
  CloseDialog(){
    if(this.mediaStream){
      this.mediaStream.stop();
    }
    this.dialog.closeAll();
  }



}
