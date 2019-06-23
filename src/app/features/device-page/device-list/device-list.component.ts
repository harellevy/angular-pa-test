import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IDevice } from '../device.types';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceListComponent {
  devices$: Observable<IDevice[]>;
  constructor(
    private store: Store<AppState>
  ) {
    this.devices$ = store.select('devices');
  }

  trackByFn(index, item: IDevice) {
    if (!item) {
      return null;
    }
    return item.id;
  }
}
