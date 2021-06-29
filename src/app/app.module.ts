import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";

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
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon'
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatTooltipModule } from '@angular/material/tooltip'
import { MatCheckboxModule } from '@angular/material/checkbox'
/*-----------------Services-----------------*/
import { DatabaseService } from './database.service';
import { LoginService } from './login.service';
import { ImprobableEngGrpcWebClientModule } from '@ngx-grpc/improbable-eng-grpc-web-client';
import { LoadingService } from './loading.service';
/*-----------------Quill Editor-----------------*/
import { TextEditorComponent } from './TextEditor/TextEditor.component';
/*-----------------Pages-----------------*/

import { FrontpageComponent } from './frontpage/frontpage.component'
import { GuidelineComponent } from '../app/guideline/guideline.component'
import { LoginPageComponent } from '../app/login-page/login-page.component'
import { ArchiveComponent } from './archive/archive.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { CustomMatPaginatorIntl } from './archive/CustomMatPageinatorIntl';
import { AddProjectDialogBoxComponent } from './archive/AddProject/add-project-dialog-box/add-project-dialog-box.component';
import { ProjectFormComponent } from './archive/AddProject/project-form/project-form.component';
import { AddDocumentDialogBoxComponent } from './archive/AddDocument/add-document-dialog-box/add-document-dialog-box.component';
import { DocumentAddComponent } from './archive/AddDocument/document-add/document-add.component';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    GuidelineComponent,
    TextEditorComponent,
    ArchiveComponent,
    LoginPageComponent,
    NavBarComponent,
    SettingsComponent,
    AddProjectDialogBoxComponent,
    ProjectFormComponent,
    AddDocumentDialogBoxComponent,
    DocumentAddComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatSortModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatExpansionModule,
    MatTabsModule,
    MatIconModule,
    MatNativeDateModule,
    MatRippleModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatProgressBarModule,
    MatTooltipModule,
    /*---Grpc---*/
    GrpcCoreModule.forRoot(),
    ImprobableEngGrpcWebClientModule.forRoot({
      settings: {
        host: 'http://40.87.150.18:27385',
        transport: grpc.CrossBrowserHttpTransport({}),
      },
    }),
    /*--End Grpc-*/
    QuillModule.forRoot({
      modules: {
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],

          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction

          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],

          ['clean'],                                         // remove formatting button

          ['link', 'image', 'video']                         // link and image, video
        ]

      }
    })
  ],
  providers: [DatabaseService, LoginService, LoadingService, AuthGuardGuard,
    MatSidenav, CustomMatPaginatorIntl],
  bootstrap: [AppComponent]
})
export class AppModule { }
