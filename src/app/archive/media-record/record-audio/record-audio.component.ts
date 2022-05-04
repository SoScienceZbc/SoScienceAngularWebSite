import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MediaStreamDirective } from '../mediastreamDirective/media-stream.directive';

@Component({
  selector: 'app-record-audio',
  templateUrl: './record-audio.component.html',
  styleUrls: ['./record-audio.component.css']
})
export class RecordAudioComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  CloseDialog(){
    this.dialog.closeAll();
  }
}
