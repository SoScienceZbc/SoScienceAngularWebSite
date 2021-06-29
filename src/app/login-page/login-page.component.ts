import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from '../loading.service';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit, OnDestroy {


  LoginFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(9)
  ]);

  PasswordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  LoginFormGruop = new FormGroup({
    username: this.LoginFormControl,
    password: this.PasswordFormControl
  })
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

    if (this.LoginFormControl.hasError('required')) {
      return 'indtast dit uni-login eller unilogin mail';
    } else if (this.LoginFormControl.hasError('minlength')) {
      return 'dit unilogin er normalt over 4 charerecter langt'
    } else if (this.LoginFormControl.hasError('maxength')) {
      return 'dit unilogin er normalt ikke over 8 charerecter lang.'
    }
    return this.LoginFormControl.hasError('pattern') ? 'det ser ikke ud til at være en uni-login navn' : '';
  }

  getErrorPasswordMessage() {
    if (this.PasswordFormControl.hasError('required')) {
      return 'du skal intaste kodeord';
    }else if (this.PasswordFormControl.hasError('minlength')) {
      return 'dit kodeord ser meget kort ud'
    }

    return this.LoginFormControl.hasError('') ? 'det ser ikke ud til at være en uni-login navn' : '';
  }


  ngOnInit(): void { }
  /**
   * this cheaks if the user can login and emits a boolian.
   * @param name the unilogin
   * @param password the passward for the unilogin
   */
  public Login(name: string, password: string) {
    this.login.CheckLogin(name, password);
    this.spinner.show();
    sessionStorage.setItem('username', name)
    if (this.testlogin) {
    }
  }
}
