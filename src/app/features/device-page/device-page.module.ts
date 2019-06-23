import { NgModule } from '@angular/core';
import { DeviceListComponent } from './device-list/device-list.component';
import { DeviceService } from './device.service';
import { DeviceFormComponent } from './device-form/device-form.component';
import { SharedModule } from '../shared/shared.module';
import { IpInputComponent } from './device-form/ip-input/ip-input.component';
import { DeviceListItemComponent } from './device-list-item/device-list-item.component';
import { DevicePageComponent } from './device-page.component';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@NgModule({
  declarations: [
    DevicePageComponent,
    DeviceListComponent,
    DeviceListItemComponent,
    DeviceFormComponent,
    IpInputComponent
  ],
  providers: [
    DeviceService
  ],
  imports: [
    VirtualScrollerModule,
    SharedModule,
  ],
  exports: [
    DeviceListComponent
  ]
})
export class DevicePageModule { }
