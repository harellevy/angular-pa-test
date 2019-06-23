import { Component } from '@angular/core';
import { ICreateDeviceDto, IDevice } from './device.types';
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
    // create 5 random events in events array
    const events = new Array(5).fill(0).map( () => DeviceService.createFakeEvent());
    const newDevice: IDevice = {
      ...device,
      ...{id: this.deviceService.generateUniqueId()},
      ...this.deviceService.generateRandomDeviceStatus(),
      ...{events: events}};
    this.store.dispatch(new DeviceActions.AddDevice(newDevice));
  }
}
