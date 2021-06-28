import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../loading.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit, OnDestroy {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  testlogin: boolean = false;

  loading$ = this.spinner.loading$;

  constructor(
    private login: LoginService,
        public spinner: LoadingService,
    private route: Router
  ) {
    this.login.LoginCheakBehavierSubject$.subscribe((x) => {
      if (x !== this.testlogin) {
        this.testlogin = x;
        sessionStorage.setItem('loggedIn', '' + this.testlogin + '');
        if (this.testlogin) {
          this.route.navigateByUrl('/forside');
        }
        console.log(this.testlogin);
      }
      this.spinner.hide();
    });
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

  ngOnInit(): void {}
  /**
   * this cheaks if the user can login and emits a boolian.
   * @param name the unilogin
   * @param password the passward for the unilogin
   */
  public Login(name: string, password: string) {
    this.login.CheckLogin(name, password);
    this.spinner.show();
    sessionStorage.setItem('username',name)
    if (this.testlogin) {
    }
  }
}
