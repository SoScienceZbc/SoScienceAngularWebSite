import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Console } from 'console';
import { CookieService } from 'ngx-cookie-service';
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
    Validators.maxLength(30)
  ]);

  PasswordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(5),
  ]);
  
  rememberMeFormControl = new FormControl(false);

  LoginFormGroup = new FormGroup({
    username: this.LoginFormControl,
    password: this.PasswordFormControl,
    rememberMe: this.rememberMeFormControl,
  })

  testlogin: boolean = false;
  loading$ = this.spinner.loading$;

  constructor(
    private login: LoginService,
    public spinner: LoadingService,
    private route: Router,
    private cookie : CookieService) 
  {
    if((cookie.get("Token") != null && cookie.get("Token") != "") || 
    (sessionStorage.getItem("Token") != null && sessionStorage.getItem("Token") != "")) {
      route.navigate(["/forside"]);
    }

    if(cookie.check("Token") || sessionStorage.getItem("Token") == null) {
      if(cookie.get("Admin") == "true") {
        sessionStorage.setItem('Admin', "true");
      }
    }
    else {
      cookie.delete("Admin");
      sessionStorage.removeItem("Admin");
    }

    this.login.LoginCheckBehaviorSubject$.subscribe((x) => {
      if (x.getLoginsucsefull() !== this.testlogin) {
        this.testlogin = x.getLoginsucsefull();
        sessionStorage.setItem('Token', '' + x.getToken() + '');
        if(x.getAdmin()){
          sessionStorage.setItem('Admin', '' + x.getAdmin() + '');
        }

        if(cookie.check("IsCookieAllowed") && 
        cookie.get("IsCookieAllowed") == "True" && 
        this.LoginFormGroup.get('rememberMe')?.value == true) {

          this.createCookie(x.getToken(), x.getAdmin(), true);
        }

        if (this.testlogin) {
          this.route.navigateByUrl('/forside');
        }
      }
      this.spinner.hide();
    });
  }
  ngOnDestroy(): void {
    if(!this.cookie.check("Token")) {
    this.login.LoginCheckBehaviorSubject$.unsubscribe();
    }
  }
  getErrorMessage() {

    if (this.LoginFormControl.hasError('required')) {
      return 'Indtast dit uni-login eller mail';
    } else if (this.LoginFormControl.hasError('minlength')) {
      return 'Dit unilogin er normalt over 4 karaktere langt'
    } else if (this.LoginFormControl.hasError('maxlength')) {
      return 'Dit unilogin er normalt ikke over 8 karaktere lang.'
    }
    return this.LoginFormControl.hasError('pattern') ? 'pattern error' : '';
  }

  getErrorPasswordMessage() {
    if (this.PasswordFormControl.hasError('required')) {
      return 'Indtast kodeord';
    }else if (this.PasswordFormControl.hasError('minlength')) {
      return 'Kodeord for kort'
    }
    return this.LoginFormControl.hasError('') ? 'Det ser ikke ud til at være et uni-login navn' : '';
  }

  ngOnInit(): void {
    
   }

  /**
   * this checks if the user can login and emits a boolian.
   * @param name the unilogin
   * @param password the password for the unilogin
   */
  public Login(name: string, password: string) {

    if(name.includes("@")){
      var tempName = name.split("@",1); //In case the user inputs their email instead of just their unilogin
      this.login.CheckLogin(tempName.toString().toLowerCase(), password);
    }
    else {
      this.login.CheckLogin(name, password);
    }
    this.spinner.show();
  }

  public Login2(name: string, password: string) {

    if(name.includes("@")){
      var tempName = name.split("@",1); //In case the user inputs their email instead of just their unilogin
      this.login.loginMockupSuccessful(tempName.toString().toLowerCase(), password);
    }
    else {
      this.login.loginMockupSuccessful(name, password);
    }
    this.spinner.show();
  }

  /**
   * Creates a cookie that expires after a set amount of days
   * @param token the cookie value
   * @param isAdmin is user an admin
   * @param canExpire does the cookie expire at some point
   */
  createCookie(token: string, isAdmin: boolean, canExpire: boolean) {
    const cookieExpiration: Date = new Date();
    const hoursToExpire: number = 24 * 14;
    cookieExpiration.setHours(cookieExpiration.getHours() + hoursToExpire);

    if(canExpire) {
      this.cookie.set("Token", token, cookieExpiration);

      if(isAdmin) {
        this.cookie.set("Admin", isAdmin + "", cookieExpiration);
      }
    }
    else {
      this.cookie.set("Token", token);

      if(isAdmin) {
        this.cookie.set("Admin", isAdmin + "");
      }
    }

  }
}
