import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MediaServiceService } from 'src/app/media-service.service';

@Component({
  selector: 'app-display-media-file',
  templateUrl: './display-media-file.component.html',
  styleUrls: ['./display-media-file.component.css']
})
export class DisplayMediaFileComponent implements OnInit {

  constructor(private dialog: MatDialog, private mediaservice: MediaServiceService)
  { }

public title = "";

  ngOnInit(): void {
  }

  CloseDialog() {
    this.dialog.closeAll();
  }
}
