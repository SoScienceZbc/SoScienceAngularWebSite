import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navbarBurgermenuopen : boolean = false;

  constructor(private route:Router,public sidenav:MatSidenav, private cookie : CookieService) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.clear();
    this.cookie.delete("Token");
    window.location.reload();
  }

  checkLogin(){
    return (sessionStorage.getItem("Token") !== null) ? true : false
  }
  checkAdmin(){
    return (sessionStorage.getItem("Admin") !== null) ? true : false
  }
}
