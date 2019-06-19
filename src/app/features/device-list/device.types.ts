import { IEventTypes } from './event.types';

export enum DEVICE_TYPE {
  WORKSTATION = 'workstation',
  MOBILE = 'mobile',
  SERVER = 'server'
}
export enum DEVICE_STATUS {
  // made in case there will be more statuses in future, could be boolean instead.
  ACTIVE = 'active', // or true
  INACTIVE = 'inactive', // or false
}

export interface ICreateDevice {
  ip: string;
  name: string;
  type: DEVICE_TYPE;
}

export interface IDevice {
  ip: string;
  name: string;
  type: DEVICE_TYPE;
  status: DEVICE_STATUS;
  events?: IEventTypes[];
}
export interface State {
  devices: IDevice[];
}
