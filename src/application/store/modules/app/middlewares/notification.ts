import { Middleware } from 'redux';
import { removeNotification, setNotification } from '../actions/notification.actions';
import { AppAction } from '../types';
export const notification: Middleware =
  () => (next: (action: AppAction) => void) => (action: AppAction) => {
    if (action.type.includes(setNotification.type)) {
      const id = new Date().getMilliseconds();

      // fire a new action with the enriched payload
      // note: the payload is an object
      next(setNotification({ id, message: 'it is notification' }));

      // dispatch a clear action after a given time
      setTimeout(() => {
        next(removeNotification({ id }));
      }, 1000);
    } else {
      next(action);
    }
  };
