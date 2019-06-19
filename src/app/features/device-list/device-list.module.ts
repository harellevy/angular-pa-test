import { NgModule } from '@angular/core';
import { DeviceListComponent } from './device-list.component';
import { DeviceService } from './device.service';
import { DeviceFormComponent } from './device-form/device-form.component';
import { SharedModule } from '../shared/shared.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { IpInputComponent } from './device-form/ip-input/ip-input.component';
import { DeviceListItemComponent } from './device-list-item/device-list-item.component';

export let ngxMastOptions: Partial<IConfig> | (() => Partial<IConfig>);


@NgModule({
  declarations: [
    DeviceListComponent,
    DeviceListItemComponent,
    DeviceFormComponent,
    IpInputComponent
  ],
  providers: [
    DeviceService
  ],
  imports: [
    SharedModule,
    NgxMaskModule.forRoot(ngxMastOptions)
  ],
  exports: [
    DeviceListComponent
  ]
})
export class DeviceListModule { }
