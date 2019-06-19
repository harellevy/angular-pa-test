import { IDevice } from './features/device-list/device.types';

export interface AppState {
  readonly devices: IDevice[];
}
