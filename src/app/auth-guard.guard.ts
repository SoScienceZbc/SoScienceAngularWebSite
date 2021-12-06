import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LeftHandSideExpression } from 'typescript';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router, private loginService : LoginService, private cookie : CookieService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if (this.cookie.check("IsCookieAllowed")) {  
        if(this.cookie.check("Token")){

          if((this.cookie.get("Token") != null || this.cookie.get("Token") != "") 
          && (sessionStorage.getItem("Token") == null || sessionStorage.getItem("Token") == "")) 
          {
            sessionStorage.setItem("Token",this.cookie.get("Token"));            
          }

          if(this.cookie.check("Admin")){
            if((this.cookie.get("Admin") != null || this.cookie.get("Admin") != "") 
            && (sessionStorage.getItem("Admin") == null || sessionStorage.getItem("Admin") == "")) 
            {
              sessionStorage.setItem("Admin", this.cookie.get("Admin") + "");
            }
          }

        }
      }
      else {
        this.cookie.deleteAll();
      }

      if(sessionStorage.getItem("Token") !== null && sessionStorage.getItem("Token") !== "")
      {
        let token = sessionStorage.getItem("Token");
        let loginreply$ = this.loginService.ValidateLogin(token!);        

        console.log(loginreply$);

        loginreply$.subscribe(data => {
          if(data != null){
            console.log("data token: " + data.getToken().length);
            if(data.getToken().length > 0) {

              if(data.getLoginsucsefull()){
                console.log("login successful.");
                loginreply$.unsubscribe();

                if (data.getAdmin() && (sessionStorage.getItem("Admin") == null || sessionStorage.getItem("Admin") == "")) {
                  sessionStorage.setItem("Admin",'' + data.getAdmin() + '');
                }
                else {
                  sessionStorage.removeItem("Admin");
                  this.cookie.delete("Admin");
                }
              }
              else {
                console.log("login not successful, cookie deleted.");
                loginreply$.unsubscribe();
                sessionStorage.removeItem("Token");
                sessionStorage.removeItem("Admin");
                this.cookie.delete("Token");
                this.cookie.delete("Admin");
                this.router.navigate(["/"]);
              }
            }
            else {
              loginreply$.unsubscribe();
              console.log("Token empty");
            } 
          }
          else {
            console.log("data is empty.");               
          }
        });     
        return true;
      }
      console.log("No session or no cookie to make session from");
      sessionStorage.removeItem("Token");
      sessionStorage.removeItem("Admin");
      this.cookie.delete("Token");
      this.cookie.delete("Admin");
      return this.router.parseUrl("/");
  }
}