import { Component } from '@angular/core';
import { ICreateDeviceDto } from './device.types';
import { DeviceService } from './device.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as DeviceActions from '../../actions/device-list.actions';

@Component({
  selector: 'app-device-page',
  templateUrl: './device-page.component.html',
  styleUrls: [],
})
export class DevicePageComponent {
  constructor(
    private store: Store<AppState>,
    private deviceService: DeviceService
  ) {
  }
  create(device: ICreateDeviceDto): void {
    const many = [];
    for (let i = 0; i < 10000; i++) {
      const newDevice = this.deviceService.createDeviceObj(device);
      many.push(newDevice);
    }
    console.log('got many results', many.length);
    this.store.dispatch(new DeviceActions.AddManyDevices(many));
  }
}
