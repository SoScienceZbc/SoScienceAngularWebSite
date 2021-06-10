import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/*-----------------Materials-----------------*/
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { grpc } from '@improbable-eng/grpc-web';
import { GrpcCoreModule } from '@ngx-grpc/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar'

/*-----------------Services-----------------*/
import { DatabaseService } from './database.service';
import { LoginService } from './login.service';
import { ImprobableEngGrpcWebClientModule } from '@ngx-grpc/improbable-eng-grpc-web-client';
import { from } from 'rxjs';
import { LoadingService } from './loading.service';
/*-----------------CkEditor-----------------*/
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TextEditorComponent } from './TextEditor/TextEditor.component';
/*-----------------Pages-----------------*/
import { ForsideComponent } from '../app/forside/forside.component';
import { GuidelineComponent } from '../app/guideline/guideline.component';
import { LoginPageComponent } from '../app/login-page/login-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ForsideComponent,
    GuidelineComponent,
    LoginPageComponent,
    TextEditorComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    CKEditorModule,
    MatSortModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule,
    /*---Grpc---*/
    GrpcCoreModule.forRoot(),
    ImprobableEngGrpcWebClientModule.forRoot({
      settings: {
        host: 'http://40.87.150.18:27385',
        transport: grpc.CrossBrowserHttpTransport({}),
      },
    }),/*--End Grpc-*/
  ],
  providers: [DatabaseService,
  LoginService,LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
