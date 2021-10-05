import { AnyAction, Middleware, MiddlewareAPI } from 'redux';
import { dataNormalized } from '../actions/data.actions';

export const normalize: Middleware =
  ({ dispatch }: MiddlewareAPI) =>
  (next: (action: AnyAction) => void) =>
  (action: AnyAction) => {
    // filter both by action type and metadata content
    if (action.type.includes('SET') && action.meta.normalizeKey) {
      // notify about the transformation
      dispatch(dataNormalized({}));
    } else {
      next(action);
    }
  };
