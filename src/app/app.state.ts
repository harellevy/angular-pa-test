import { IDevice } from './features/device-page/device.types';

export interface AppState {
  readonly devices: IDevice[];
  readonly device: IDevice;
}
