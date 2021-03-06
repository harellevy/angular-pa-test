import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IDevice } from '../device.types';
import { DeviceDetailsComponent } from '../../device-details/device-details.component';
import { MatDialog } from '@angular/material';
import { AppState } from '../../../app.state';
import { Store } from '@ngrx/store';
import * as ActiveDeviceActions from '../../../actions/active-device.actions';

@Component({
  selector: 'app-device-list-item',
  templateUrl: './device-list-item.component.html',
  styleUrls: ['./device-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DeviceListItemComponent {
  @Input() device: IDevice;
  constructor(
    private modalService: MatDialog,
    private store: Store<AppState>
  ) {
  }

  openDeviceModal() {
    this.store.dispatch( new ActiveDeviceActions.SetDevice(this.device));
    // const dialogRef =  // for use with result subscriber
    this.modalService.open(DeviceDetailsComponent, {
      width: '550px',
      panelClass: 'device-modal'
    });

    // if need to set something after modal closed
    // dialogRef.afterClosed().subscribe(result => {
    // });
  }

}
