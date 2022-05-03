import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
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

  public videoSrc!: SafeUrl;
  public recMedia!: Blob;


  constructor(private dialog: MatDialog, private sanitizer: DomSanitizer,@Inject(MAT_DIALOG_DATA) private projectid: any, private mediaService:MediaServiceService) { }

  ngAfterViewInit(): void {
    this.mediaStream.play();
  }
  public onVideo(data: Blob): void {
    this.videoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
    this.recMedia = data;
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
    console.log()
  }
  clearRecording(){
    this.videoSrc = "";
  }
  save(){

  }
  CloseDialog(){
    this.mediaStream.stop();
    this.dialog.closeAll();
  }



}
