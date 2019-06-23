import { Action } from '@ngrx/store';
import { IDevice } from '../features/device-page/device.types';

export const ADD_DEVICE       = '[DEVICE] Add';
export const ADD_MANY_DEVICES = '[DEVICE] Add many';
export const REMOVE_DEVICE    = '[DEVICE] Remove';

export class AddDevice implements Action {
  readonly type = ADD_DEVICE;

  constructor(public payload: IDevice) {}
}
export class AddManyDevices implements Action {
  readonly type = ADD_MANY_DEVICES;

  constructor(public payload: IDevice[]) {}
}

export class RemoveDevice implements Action {
  readonly type = REMOVE_DEVICE;

  constructor(public payload: number) {}
}

export type Actions = AddDevice | AddManyDevices | RemoveDevice;
