import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router, private loginService : LoginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(sessionStorage.getItem("Token") !== null){
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
              this.router.navigate(['/']);
            }
          }
        });
        return true;
      }
      return this.router.parseUrl("/");
  }

}
