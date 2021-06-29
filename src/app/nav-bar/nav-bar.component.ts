import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  navbarBurgermenuopen : boolean = false;

  constructor(private route:Router,public sidenav:MatSidenav) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.clear();
    window.location.reload();
  }

  checkLogin(){
    return (sessionStorage.getItem("loggedIn") == "true") ? false: true
  }
}
