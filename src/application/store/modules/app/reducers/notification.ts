/*
import { removeNotification, setNotification } from '../actions';
import { Loadable, Reducer } from '../../../types';
import { AppAction, AppState } from '../types';
import { AppNotification } from '../../../../types';

type ReducerOf<T extends keyof AppState> = Reducer<AppState, AppAction, T>;

export const notifications: ReducerOf<'notifications'> = (state= [], action) => {
    if(action.type.includes(setNotification.type)) {
      return state.push(action.payload);
    }
    if (action.type.includes(removeNotification.type)) {
      const payload = action.payload;
      const filteredNotifications = state.filter((notificationItem: AppNotification) => notificationItem.id !== payload.id);
      return new Array(filteredNotifications);
    }
    return state;
};
*/

export {};
