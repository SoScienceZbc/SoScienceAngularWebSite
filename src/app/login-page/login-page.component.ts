import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Value } from '@ngx-grpc/well-known-types';
import { Observable, Subscriber } from 'rxjs';
import { DatabaseService } from '../database.service';
import { ForsideComponent } from '../forside/forside.component';
import { D_Project, D_Projects } from '../generated/DataBaseProto/DatabaseProto_pb';
import { LoginService } from '../login.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  testlogin: boolean = false;
  projects: D_Projects = new D_Projects;

  constructor(private login: LoginService,private route:Router) {
    this.login.LoginCheakBehavierSubject$.subscribe(x => {
      // this.testlogin = x;
      //TODO: Start Spinder/Loading loag
      if (x !== this.testlogin) {
        this.testlogin = x;
        this.route.navigate("");
        console.log(this.testlogin);
      }
    });
    // this.dataServer.behavProject$.subscribe(x => {
    //   this.projects = x;

    // });

  }
  ngOnDestroy(): void {
    this.login.LoginCheakBehavierSubject$.unsubscribe();
  }
  getErrorMessage() {
    if (this.emailFormControl.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailFormControl.hasError('email') ? 'Not a valid email' : '';
  }

  ngOnInit(): void {
  }

  public Login(name: string, password: string) {
    this.login.CheckLogin(name, password);
  }
}
