import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { IDevice } from '../device-list/device.types';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import * as DeviceActions from '../../actions/device-list.actions';

@Component({
  selector: 'app-device-details',
  templateUrl: './device-details.component.html',
  styleUrls: ['./device-details.component.scss']
})
export class DeviceDetailsComponent implements OnInit {
  device: IDevice;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {idx: number},
    private dialogRef: MatDialogRef<DeviceDetailsComponent>,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {
    this.store.select('devices').subscribe((res) => {
      this.device = res[this.data.idx];
    });
  }

  delete() {
    this.store.dispatch(new DeviceActions.RemoveDevice(this.data.idx));
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}
