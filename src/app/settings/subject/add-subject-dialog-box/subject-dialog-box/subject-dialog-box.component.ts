import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoadingService } from 'src/app/loading.service';

@Component({
  selector: 'app-subject-dialog-box',
  templateUrl: './subject-dialog-box.component.html',
  styleUrls: ['./subject-dialog-box.component.css']
})
export class SubjectDialogBoxComponent implements OnInit {

  constructor(private dilog: MatDialog , private spinner:LoadingService) { }
  loading$ = this.spinner.loading$;
  ngOnInit(): void {
  }

  testDialog() {
  }

}
