import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { D_Project } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-forside',
  templateUrl: './forside.component.html',
  styleUrls: ['./forside.component.css']
})
export class ForsideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
