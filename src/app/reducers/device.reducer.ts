import * as DeviceActions from './../actions/device-list.actions';
import * as ActiveDeviceActions from './../actions/active-device.actions';
import { IDevice } from '../features/device-page/device.types';

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
      const index = state.findIndex(i => i.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
      return [...state];
    default:
      return state;
  }
}

export function activeDeviceReducer(state: IDevice = null, action: ActiveDeviceActions.Actions) {
  switch (action.type) {
    case ActiveDeviceActions.SET_DEVICE:
      return {...action.payload};
    default:
      return state;
  }
}
