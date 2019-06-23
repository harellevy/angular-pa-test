import { Action } from '@ngrx/store';
import { IDevice } from '../features/device-page/device.types';

export const SET_DEVICE       = '[DEVICE] Set';
export class SetDevice implements Action {
  readonly type = SET_DEVICE;
  constructor(public payload: IDevice) {}
}

export type Actions = SetDevice;
