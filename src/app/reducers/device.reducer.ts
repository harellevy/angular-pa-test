import * as DeviceActions from './../actions/device-list.actions';
import { IDevice } from '../features/device-list/device.types';

/**
 *
 * example of Idevice
 *
 const initialState: IDevice = {
  name: 'Initial Tutorial',
  ip: '0.0.0.0',
  status: DEVICE_STATUS.ACTIVE,
  type: DEVICE_TYPE.MOBILE,
  events: [],

  };
 *
 */

export function reducer(state: IDevice[] = [], action: DeviceActions.Actions) {
  switch (action.type) {
    case DeviceActions.ADD_DEVICE:
      return [...state, action.payload];
    case DeviceActions.REMOVE_DEVICE:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}
