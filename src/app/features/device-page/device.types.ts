import { IEventTypes } from './event.types';

export enum DEVICE_TYPE {
  WORKSTATION = 'workstation',
  MOBILE = 'mobile',
  SERVER = 'server'
}
export enum DEVICE_STATUS {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export interface ICreateDeviceDto {
  ip: string;
  name: string;
  type: DEVICE_TYPE;
}

export interface IDevice {
  id?: number;
  ip: string;
  name: string;
  type: DEVICE_TYPE;
  status: DEVICE_STATUS;
  events: IEventTypes[];
}
export interface State {
  devices: IDevice[];
}
