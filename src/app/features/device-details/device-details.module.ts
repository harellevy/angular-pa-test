import { NgModule } from '@angular/core';
import { DeviceDetailsComponent } from './device-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DeviceDetailsComponent],
  imports: [
    SharedModule
  ],
  entryComponents: [
    DeviceDetailsComponent
  ]
})
export class DeviceDetailsModule { }
