import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { RecordAudioComponent } from './record-audio.component';

const routes: Routes = [{ path: '', component: RecordAudioComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MicrophoneRoutingModule { }
