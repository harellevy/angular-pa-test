import { AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { IDevice } from '../device.types';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.state';
import { VirtualScrollerComponent } from 'ngx-virtual-scroller';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeviceListComponent implements AfterViewInit {
  devices: IDevice[] = [];
  devices$: Observable<IDevice[]>;
  @ViewChild(VirtualScrollerComponent, {static: false})
  private virtualScroller: VirtualScrollerComponent;
  constructor(
    private store: Store<AppState>
  ) {
    this.devices$ = store.select('devices');
  }

  ngAfterViewInit(): void {
    this.devices$.subscribe((devices) => {
      this.devices = devices;
      this.virtualScroller.refresh();
    });
  }

  trackByFn(index, item: IDevice) {
    if (!item) {
      return null;
    }
    return item.id;
  }
}
