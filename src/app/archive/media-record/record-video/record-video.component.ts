import { AfterViewInit, Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { delay } from 'rxjs/operators';
import { MediaStreamDirective } from '../mediastreamDirective/media-stream.directive';
import { DatabaseService } from 'src/app/database.service';
import { MediaServiceService } from 'src/app/media-service.service';
import { MediaRequest } from 'src/app/protos/RemoteMediaProto_pb';
import { truncate } from 'fs';

@Component({
  selector: 'app-record-video',
  templateUrl: './record-video.component.html',
  styleUrls: ['./record-video.component.css']
})
export class RecordVideoComponent implements AfterViewInit{

  @ViewChild(MediaStreamDirective)
  public mediaStream!: MediaStreamDirective;

  public videoSrc!: SafeUrl;
  public videoBlob = {} as Blob;
  public saved = {} as boolean;
  public timer = {} as boolean;
  public title = "";


  constructor(@Inject(MAT_DIALOG_DATA) public projectid: any, private dialog: MatDialog, private sanitizer: DomSanitizer, private mediaService: MediaServiceService) { }

  ngAfterViewInit(): void {
    this.mediaStream.startVideo();
    this.saved = true;
    this.timer = false;

  }
  public onVideo(data: Blob): void {
    this.videoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
    this.videoBlob = data;
  }
  startCamera(){
    this.mediaStream.startVideo();
  }
  startRecord(){
    this.mediaStream.recordStart();
    this.timer = true;
  }
  stopRecord(){
    this.mediaStream.recordStop();
    this.mediaStream.stop();
    this.saved = false;
    this.timer = false;
  }
  clearRecording(){
    this.videoSrc = "";
    this.saved = true;
    this.startCamera();
  }
  async save(){
    console.log(this.videoSrc)
    console.log(this.videoBlob.size)
    console.log("projectid" + this.projectid.projectid);
    if(this.videoBlob) {
      console.log(this.title)
      let newVid = new MediaRequest();
      newVid.setProjectid(this.projectid.projectid)
      newVid.setTitle("New recorded video")
      newVid.setType("video");


      //Make Uint8array
      var buffer = await new Response(this.videoBlob).arrayBuffer();
      const videoArray = new Uint8Array(buffer);
      newVid.setBlobdata(videoArray);
      console.log(this.videoBlob.size)

      //Simulated retrieved blob from DB
      var tempArray = videoArray.subarray(0, videoArray.length)
      var newBuffer = tempArray.buffer
      var dataView = new DataView(newBuffer);
      var blob = new Blob([dataView], { })
      this.videoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob))

      this.mediaService.AddRecordedMedia(newVid);
      this.saved = true;
    }
  }
  titleSet(){
    if(this.title.length < 4 || this.title.length > 40){
      return true;
    }
    else{
      return false;
    }
  }

  CloseDialog(){
    if(this.mediaStream){
      this.mediaStream.stop();
    }
    this.dialog.closeAll();
  }
}
