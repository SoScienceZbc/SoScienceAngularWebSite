import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { delay } from 'rxjs/operators';
import { MediaStreamDirective } from './mediastreamDirective/media-stream.directive';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-record-video',
  templateUrl: './record-video.component.html',
  styleUrls: ['./record-video.component.css']
})
export class RecordVideoComponent implements AfterViewInit{

  @ViewChild(MediaStreamDirective)
  public mediaStream!: MediaStreamDirective;

  public videoSrc!: SafeUrl;
  constructor(private dialog: MatDialog, private sanitizer: DomSanitizer) { }

  ngAfterViewInit(): void {
    this.mediaStream.play();
  }
  public onVideo(data: Blob): void {
    this.videoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
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
  }
  clearRecording(){
    this.videoSrc = "";
  }
  save(videoSrc:any){
    let srcLength = videoSrc.size;
    if(srcLength > 0){
      console.log("over")
    }
    else{
      console.log("under")
    }

  }
  CloseDialog(){
    this.dialog.closeAll();
  }



}
