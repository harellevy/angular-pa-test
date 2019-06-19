import { Component } from '@angular/core';
import { IDevice } from './device.types';
import { DeviceService } from './device.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';
import * as DeviceActions from '../../actions/device-list.actions';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss']
})
export class DeviceListComponent {
  devices: Observable<IDevice[]>;

  // devices: IDevice[];
  constructor(
    private store: Store<AppState>,
    private deviceService: DeviceService
  ) {
    this.devices = store.select('devices');
  }
  create(device: IDevice) {
    const events = new Array(5).fill(0).map( () => DeviceService.createFakeEvent());
    const newDevice: IDevice = {...this.deviceService.addRandomDeviceStatus(device), ...{
        events: events
      }};
    this.store.dispatch(new DeviceActions.AddDevice(newDevice));
    // this.deviceService.create();
    // get after push, omit after ngrx
    // this.getAllDevices();
  }
}
