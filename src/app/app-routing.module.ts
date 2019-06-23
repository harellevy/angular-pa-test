import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicePageComponent } from './features/device-page/device-page.component';

const routes: Routes = [
  {path: '', component: DevicePageComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
