import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { GuidelineComponent } from './guideline/guideline.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ArchiveComponent } from './archive/archive.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { TextEditorComponent } from './TextEditor/TextEditor.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'forside', component: FrontpageComponent, canActivate: [AuthGuardGuard] },
  { path: 'guideline', component: GuidelineComponent, canActivate: [AuthGuardGuard] },
  { path: 'arkiv', component: ArchiveComponent, canActivate: [AuthGuardGuard] },
  { path: 'indstillinger', component: SettingsComponent, canActivate: [AuthGuardGuard] },
  { path: "TextEditor", component: TextEditorComponent ,canActivate:[AuthGuardGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
