import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.css']
})
export class CookieComponent implements OnInit, OnDestroy {

  constructor(private cookie : CookieService, private bottomSheet: MatBottomSheet) { }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(!this.cookie.check("IsCookieAllowed")){
      this.cookie.set("IsCookieAllowed", "False");
    }
  }

  allowCookie(){
    this.cookie.deleteAll();
    this.cookie.set("IsCookieAllowed", "True", 30);
    this.bottomSheet.dismiss();
  }

  disallowCookie(){
    this.cookie.deleteAll();
    this.cookie.set("IsCookieAllowed", "False", 30);
    this.bottomSheet.dismiss();
  }
}
