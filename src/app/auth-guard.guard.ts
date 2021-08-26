import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router, private loginService : LoginService, private cookie : CookieService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.cookie.check("Token") && (sessionStorage.getItem("Token") == null || sessionStorage.getItem("Token") == "")) {
        sessionStorage.setItem("Token",this.cookie.get("Token"));
      }
      if(sessionStorage.getItem("Token") !== null && sessionStorage.getItem("Token") !== ""){
        let token = sessionStorage.getItem("Token");
        let admin = sessionStorage.getItem("admin") !== null;
        const loginreply$ = this.loginService.ValidateLogin(token!,admin)
        loginreply$.subscribe(data => {
          if(data != null){
            if(data.getLoginsucsefull()){
              loginreply$.unsubscribe();
            }else{
              loginreply$.unsubscribe();
              sessionStorage.removeItem("Token");
              sessionStorage.removeItem("Admin");
              this.router.navigate(["/"]);
            }
          }
        });
        return true;
      }
      sessionStorage.removeItem("Token");
      sessionStorage.removeItem("Admin");
      return this.router.parseUrl("/");
  }

}
