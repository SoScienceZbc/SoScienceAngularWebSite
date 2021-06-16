import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { D_Project } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-forside',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
