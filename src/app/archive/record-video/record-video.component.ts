import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { delay } from 'rxjs/operators';
import { MediaStreamDirective } from './mediastreamDirective/media-stream.directive';
import { DatabaseService } from 'src/app/database.service';
import { RemoteMediaService } from 'src/app/protos/RemoteMediaProto_pb_service';

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
  constructor(private dialog: MatDialog, private sanitizer: DomSanitizer) { }

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

  }
  clearRecording(){
    this.videoSrc = "";
  }
  save(){
    console.log(this.videoBlob)
    console.log(this.videoBlob.size)
    if(this.videoBlob) {
      console.log("hello world")
    }
  }
  CloseDialog(){
    this.dialog.closeAll();
  }



}
