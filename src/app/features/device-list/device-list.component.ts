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
  constructor(
    private store: Store<AppState>,
    private deviceService: DeviceService
  ) {
    this.devices = store.select('devices');
  }
  create(device: IDevice) {
    // create 5 random events in events array
    const events = new Array(5).fill(0).map( () => DeviceService.createFakeEvent());
    const newDevice: IDevice = {...this.deviceService.addRandomDeviceStatus(device), ...{
        events: events
      }};
    this.store.dispatch(new DeviceActions.AddDevice(newDevice));
  }
}
