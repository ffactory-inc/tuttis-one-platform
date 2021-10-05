import * as actions from './actions';
import { AppNotification } from '../../../types';

// eslint-disable-next-line no-undef
export type AppAction = ReturnType<ValueOf<typeof actions>>;
export type AppState = {
  loading: boolean;
  notifications: AppNotification[];
};
