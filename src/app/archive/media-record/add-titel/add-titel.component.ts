import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-titel',
  templateUrl: './add-titel.component.html',
  styleUrls: ['./add-titel.component.css']
})
export class AddTitelComponent implements OnInit {

  titleInput: any;

  ngOnInit(): void {
  }

}
