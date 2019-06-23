import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { IDevice } from '../device-page/device.types';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as DeviceActions from '../../actions/device-list.actions';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent {
  device: IDevice;
  constructor(
    private dialogRef: MatDialogRef<DeviceDetailsComponent>,
    private store: Store<AppState>
  ) {
    this.store.select('activeDevice').subscribe((res) => {
      this.device = res;
    });
  }

  trackByIdx(idx) {
    return idx;
  }
  delete() {
    if (this.device) {
      this.store.dispatch(new DeviceActions.RemoveDevice(this.device.id));
      this.closeModal();
    }
  }
  closeModal() {
    this.dialogRef.close();
  }
}
