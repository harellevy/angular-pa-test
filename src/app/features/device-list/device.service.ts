import { Injectable } from '@angular/core';
import { DEVICE_STATUS, IDevice } from './device.types';
import { EVENT_TYPE, IEventTypes, SERVERITY } from './event.types';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  static createFakeEvent() {
    return _generateFakeEvent();
  }
  constructor() {

  }

  addRandomDeviceStatus(device: IDevice): IDevice {
    // generate random status
    return {...device, ...{status: _generateFakeFromEnum(DEVICE_STATUS)}};
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

