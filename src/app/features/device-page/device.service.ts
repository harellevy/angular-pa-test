import { Injectable } from '@angular/core';
import { DEVICE_STATUS } from './device.types';
import { EVENT_TYPE, IEventTypes, SERVERITY } from './event.types';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private inc = 0;
  static createFakeEvent() {
    return _generateFakeEvent();
  }
  static generateRandomDeviceStatus(): {status: DEVICE_STATUS} {
    // generate random status
    return {status: _generateFakeFromEnum(DEVICE_STATUS)};
  }
  constructor() {

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

