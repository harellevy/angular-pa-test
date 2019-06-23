import { Injectable } from '@angular/core';
import { DEVICE_STATUS, ICreateDeviceDto, IDevice } from './device.types';
import { EVENT_TYPE, IEventTypes, SERVERITY } from './event.types';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private inc = 0;
  constructor() {

  }

  createDeviceObj(device: ICreateDeviceDto): IDevice {
    // create 5 random events in events array
    const events = new Array(5).fill(0).map( () => _generateFakeEvent());
    return {
      ...device,
      ...{id: this.generateUniqueId()},
      ...{status: _generateFakeFromEnum(DEVICE_STATUS)},
      ...{events: events}
    };
  }

  generateUniqueId(): number {
    return this.inc++;
  }

}

function _generateFakeEvent(): IEventTypes {
  return {
    type: _generateFakeFromEnum(EVENT_TYPE),
    severity: _generateFakeFromEnum(SERVERITY),
    description: `random event ${Math.floor(Math.random() * 1000)}`
  };
}
function  _generateFakeFromEnum(enumeration: any) {
  // if in use in other places in the future, better move to utils.service in shared folder.
  const values = Object.keys(enumeration);
  const enumKey = values[Math.floor(Math.random() * values.length)];
  return enumeration[enumKey];
}

