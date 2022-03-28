import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MediaStreamDirective } from './mediastreamDirective/media-stream.directive';

@Component({
  selector: 'app-record-video',
  templateUrl: './record-video.component.html',
  styleUrls: ['./record-video.component.css']
})
export class RecordVideoComponent implements AfterViewInit {

@ViewChild(MediaStreamDirective)
public mediaStream!: MediaStreamDirective;

public videoSrc!: SafeUrl;
constructor(private dialog: MatDialog, private sanitizer: DomSanitizer) { }

ngAfterViewInit(): void {

}

public onVideo(data: Blob): void {
this.videoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
}

clearRecording() {

}
  CloseDialog(){
    this.dialog.closeAll();
  }
}
