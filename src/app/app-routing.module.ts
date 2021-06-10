import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { GuidelineComponent } from './guideline/guideline.component';
import { ForsideComponent } from './forside/forside.component';
import { ArchiveComponent } from './archive/archive.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'forside', component: ForsideComponent },
  { path: 'guideline', component: GuidelineComponent },
  { path: 'arkiv', component: ArchiveComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
