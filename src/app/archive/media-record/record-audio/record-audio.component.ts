import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MediaStreamDirective } from '../mediastreamDirective/media-stream.directive';
import { MediaServiceService } from 'src/app/media-service.service';
import { MediaRequest } from 'src/app/protos/RemoteMediaProto_pb';
import { SafeUrl } from '@angular/platform-browser';

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
  sanitizer: any;
  constructor(@Inject(MAT_DIALOG_DATA) public projectid: any,private dialog: MatDialog, private mediaService: MediaServiceService) { }

  ngAfterViewInit(): void {
    this.mediaStream.audioPlay();
  }

  public onAudio(data: Blob): void {
    this.audioSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
    this.audioBlob = data;
  }

  startMicrophone() {

  }

  startRecord() {

  }

  stopRecord() {

  }

  clearRecording() {

  }

  save() {

  }
  CloseDialog(){
    this.dialog.closeAll();
  }
}
