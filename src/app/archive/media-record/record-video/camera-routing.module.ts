import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecordVideoComponent } from './record-video.component';

const routes: Routes = [{ path: '', component: RecordVideoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraRoutingModule { }
