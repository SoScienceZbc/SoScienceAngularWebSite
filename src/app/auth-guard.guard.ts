import { Injectable } from '@angular/core';
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
        }
      } else {
        this.cookie.deleteAll();
      }
      if(sessionStorage.getItem("Token") !== null && sessionStorage.getItem("Token") !== "")
      {
        let token = sessionStorage.getItem("Token");       
        let loginreply$ = this.loginService.ValidateLogin(token!)
        if(token != null && token != ""){
          if(loginreply$ != null) {
            loginreply$.subscribe(data => {
              if(data != null){
                if(data.getLoginsucsefull()){
                  loginreply$.unsubscribe();
                  if (data.getAdmin()){
                    sessionStorage.setItem("Admin",'' + data.getAdmin() + '');
                    
                    if(this.cookie.check("Admin")){
                      if((this.cookie.get("Admin") != null || this.cookie.get("Admin") != "") 
                      && (sessionStorage.getItem("Admin") == null || sessionStorage.getItem("Admin") == "")) {
                        sessionStorage.setItem("Admin", data.getAdmin() + "");
                      }
                    }  
                  }
                  else{
                    sessionStorage.removeItem("Admin");
                  }
                }
                else {
                  loginreply$.unsubscribe();
                  sessionStorage.removeItem("Token");
                  sessionStorage.removeItem("Admin");
                  this.cookie.delete("Token");
                  this.router.navigate(["/"]);
                }
              }
            });
          } 
          else {
            loginreply$ = this.loginService.ValidateLogin(token!);
            this.SubscribeData(token!);
          }
        }
        
        return true;
      }
      sessionStorage.removeItem("Token");
      sessionStorage.removeItem("Admin");
      //this.cookie.delete("Token");
      return this.router.parseUrl("/");
  }

  public SubscribeData(token: string){
    token = sessionStorage.getItem("Token")!;
    let loginreply$ = this.loginService.ValidateLogin(token!)
    loginreply$.subscribe(data => {
      if(data != null){
        if(data.getLoginsucsefull()){
          loginreply$.unsubscribe();
          if (data.getAdmin()){
            sessionStorage.setItem("Admin",'' + data.getAdmin() + '');
            
            if(this.cookie.check("Admin")){
              if((this.cookie.get("Admin") != null || this.cookie.get("Admin") != "") 
              && (sessionStorage.getItem("Admin") == null || sessionStorage.getItem("Admin") == "")) {
                sessionStorage.setItem("Admin", data.getAdmin() + "");
              }
            }
            
          }else{
            sessionStorage.removeItem("Admin");
          }
        }else{
          loginreply$.unsubscribe();
          sessionStorage.removeItem("Token");
          sessionStorage.removeItem("Admin");
          this.cookie.delete("Token");
          this.router.navigate(["/"]);
        }
      }
    });
  }
}
