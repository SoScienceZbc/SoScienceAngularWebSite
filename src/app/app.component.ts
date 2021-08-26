import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { CookieService } from 'ngx-cookie-service';
import { CookieComponent } from './cookie/cookie.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SoScienceRefactorV2';

  constructor(private cookie : CookieService, private bottomSheet: MatBottomSheet) {
    
  }
  ngOnInit(): void {
    if (!this.cookie.check("IsCookieAllowed")){
      this.bottomSheet.open(CookieComponent);
    }
  }
}
