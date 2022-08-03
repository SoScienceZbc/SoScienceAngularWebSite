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
  public timer = {} as boolean;
  public title = "";
  constructor(@Inject(MAT_DIALOG_DATA) public projectid: any,private dialog: MatDialog, private sanitizer: DomSanitizer, private mediaService: MediaServiceService) { }

  ngAfterViewInit(): void {
    this.mediaStream.startAudio();
    this.saved = true;
    this.timer = false;
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
    this.timer = true;
  }

  stopRecord() {
    this.mediaStream.recordStop();
    this.mediaStream.stop();
    this.saved = false;
    this.timer = false;
  }

  clearRecording() {
    this.audioSrc = "";
    this.saved = true;
  }

  async save() {
    console.log("src: " + this.audioSrc)
    console.log("audio blob: " + this.audioBlob.size)
    console.log("id: " + this.projectid.projectid)
    if(this.audioBlob) {
      console.log("entered save audio")
      let newRequest = new MediaRequest();
      newRequest.setProjectid(this.projectid.projectid)
      if(this.title.length == 0 || this.title == null) {
        newRequest.setTitle("Unavngivet");
      }else{
        newRequest.setTitle(this.title);
      }
      newRequest.setType("audio");
      var buffer = await new Response(this.audioBlob).arrayBuffer();
      const audioArray = new Uint8Array(buffer);
      newRequest.setBlobdata(audioArray)
      this.mediaService.AddRecordedMedia(newRequest);
      this.saved = true;
    }
  }

  setTitle(){

    if((this.title.length < 4 && this.title.length != 0) || this.title.length > 40){
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
