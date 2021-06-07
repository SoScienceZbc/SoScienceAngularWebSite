import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DatabaseService } from '../database.service';
import { D_Project } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  respon: any
  constructor(private login:LoginService,private dataServer:DatabaseService) {

   }
   getErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {

  }

  public Login(name:string,password:string){
    this.login.CheckLogin(name,password);
  }

  public BtnPush(event : Event){
    console.log(this.login.CheckLogin("andi0137","Idna!dna2375"))
    //return true;
  }

  public BtnPushDatabase(event:Event)
  {
    console.log(this.dataServer.GetProjects());

  }

}
