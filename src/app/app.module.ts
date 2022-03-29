import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { grpc } from '@improbable-eng/grpc-web';
import { GrpcCoreModule } from '@ngx-grpc/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

/*-----------------Materials-----------------*/
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
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
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
/*-----------------Services-----------------*/
import { DatabaseService } from './database.service';
import { LoginService } from './login.service';
import { ImprobableEngGrpcWebClientModule } from '@ngx-grpc/improbable-eng-grpc-web-client';
import { LoadingService } from './loading.service';
/*-----------------Quill Editor-----------------*/
import { TextEditorComponent } from './TextEditor/TextEditor.component';
import { QuillModule } from 'ngx-quill';
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
import { FooterComponent } from './footer/footer.component';
import { DialogAreYouSureComponent } from './dialog-are-you-sure/dialog-are-you-sure.component';
import { QuilEditorPreViewComponent } from './quil-editor-pre-view/quil-editor-pre-view.component';
import { ProjectThemeFormComponent } from './settings/project-theme/add-project-theme-form/project-theme-form/project-theme-form.component';
import { ProjectThemeDialogueBoxComponent } from './settings/project-theme/add-project-theme-dialogue-box/project-theme-dialogue-box/project-theme-dialogue-box.component';
import { DatePipe } from '@angular/common';
import { Field } from '@ngx-grpc/well-known-types';
import { AddRemoveUserComponent } from './settings/add-remove-user/add-remove-user.component';
import { AddRemoveMemberComponent } from './archive/add-remove-member/add-remove-member.component';
import { ProjectOverviewComponent } from './settings/project-overview/project-overview.component';
import { CookieComponent } from './cookie/cookie.component';
import { RecordVideoComponent } from './archive/record-video/record-video.component';
import { RecordAudioComponent } from './archive/record-audio/record-audio.component';
import { MediaStreamDirective } from './archive/record-video/mediastreamDirective/media-stream.directive';

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
    MediaStreamDirective,
    AddProjectDialogBoxComponent,
    ProjectFormComponent,
    AddDocumentDialogBoxComponent,
    DocumentAddComponent,
    FooterComponent,
    DialogAreYouSureComponent,
    QuilEditorPreViewComponent,
    ProjectThemeFormComponent,
    ProjectThemeDialogueBoxComponent,
    AddRemoveUserComponent,
    AddRemoveMemberComponent,
    ProjectOverviewComponent,
    CookieComponent,
    RecordVideoComponent,
    RecordAudioComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
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
    FlexLayoutModule,
    MatBottomSheetModule,
    CommonModule,
    OverlayModule,
    CdkTreeModule,
    PortalModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatDividerModule,
    MatSnackBarModule,
    MatTreeModule,
    MatBadgeModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    /*---Grpc---*/
    GrpcCoreModule.forRoot(),
    ImprobableEngGrpcWebClientModule.forRoot({
      settings: {
        host: 'https://soscience.dk:27385',
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

          ['link', 'image', 'video'] ,                        // link and image, video
        ]
      },theme:'snow'
    })
  ],
  providers: [
    DatabaseService,
    LoginService,
    LoadingService,
    AuthGuardGuard,
    MatSidenav,
    CustomMatPaginatorIntl,
    DatePipe,
  MediaStream],
  bootstrap: [AppComponent]
})
export class AppModule { }
