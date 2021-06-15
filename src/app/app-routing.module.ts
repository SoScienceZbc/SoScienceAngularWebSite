import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { GuidelineComponent } from './guideline/guideline.component';
import { ForsideComponent } from './forside/forside.component';
import { ArchiveComponent } from './archive/archive.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuardGuard } from './auth-guard.guard';
import { TextEditorDilogBoxComponent } from './archive/TextEditorDilogBox/TextEditorDilogBox.component';
import { DatabaseService } from './database.service';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'forside', component: ForsideComponent, canActivate: [AuthGuardGuard] },
  { path: 'guideline', component: GuidelineComponent, canActivate: [AuthGuardGuard] },
  { path: 'arkiv', component: ArchiveComponent, canActivate: [AuthGuardGuard] },
  { path: 'indstillinger', component: SettingsComponent, canActivate: [AuthGuardGuard] },
  { path: "Dialog", component: TextEditorDilogBoxComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
