import * as actions from './actions';
import { AppNotification } from '../../../types';

export type AppAction = ReturnType<ValueOf<typeof actions>>;
export type AppState = {
  loading: boolean;
  notifications: AppNotification[];
};
