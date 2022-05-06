import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MediaStreamDirective } from '../mediastreamDirective/media-stream.directive';
import { MediaServiceService } from 'src/app/media-service.service';
import { MediaRequest } from 'src/app/protos/RemoteMediaProto_pb';
import { SafeUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-record-audio',
  templateUrl: './record-audio.component.html',
  styleUrls: ['./record-audio.component.css']
})
export class RecordAudioComponent implements AfterViewInit {

  @ViewChild(MediaStreamDirective)
  public mediaStream!: MediaStreamDirective;

  public audioSrc!: SafeUrl;
  public audioBlob = {} as Blob;
  public saved = {} as boolean;
  constructor(@Inject(MAT_DIALOG_DATA) public projectid: any,private dialog: MatDialog, private sanitizer: DomSanitizer, private mediaService: MediaServiceService) { }

  ngAfterViewInit(): void {
    this.mediaStream.startAudio();
  }

  public onAudio(data: Blob): void {
    this.audioSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
    this.audioBlob = data;
  }

  startMicrophone() {
    this.mediaStream.startAudio();
  }

  startRecord() {
    this.mediaStream.recordStart();
  }

  stopRecord() {
    this.mediaStream.recordStop();
    this.mediaStream.stop();

  }

  clearRecording() {
    this.audioSrc = "";
  }

  save() {
    console.log("src: " + this.audioSrc)
    console.log("audio blob: " + this.audioBlob.size)
    console.log("id: " + this.projectid.projectid)
  }
  CloseDialog(){
    if(this.mediaStream){
      this.mediaStream.stop();
    }
    this.dialog.closeAll();
  }
}
