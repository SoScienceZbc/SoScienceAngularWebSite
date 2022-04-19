import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { MediaStreamDirective } from './mediastreamDirective/media-stream.directive';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-record-video',
  templateUrl: './record-video.component.html',
  styleUrls: ['./record-video.component.css']
})
export class RecordVideoComponent implements AfterViewInit {

@ViewChild(MediaStreamDirective)
public mediaStream!: MediaStreamDirective;

public videoSrc!: SafeUrl;
constructor(@Inject(MAT_DIALOG_DATA) public projectid: any,private dialog: MatDialog, private sanitizer: DomSanitizer, private databaseService: DatabaseService) { }

ngAfterViewInit(): void {

}

public onVideo(data: Blob): void {
this.videoSrc = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data));
console.log("videoSrc: ", this.videoSrc)
console.log("vidblob: ", data)
console.log("blob text: ", data.text)
console.log(data.size)
console.log(this.projectid)
}

clearRecording() {

}
  CloseDialog(){
    this.dialog.closeAll();
  }
}
