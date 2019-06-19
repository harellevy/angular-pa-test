import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { IDevice } from '../features/device-list/device.types';

export interface State {
  devices?: IDevice[];
}

export const reducers: ActionReducerMap<State> = {
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
