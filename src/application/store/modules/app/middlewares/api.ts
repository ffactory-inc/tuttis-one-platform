import { Middleware, MiddlewareAPI } from 'redux';
import { apiRequest } from '../actions/api.actions';

export const api: Middleware =
  ({ dispatch }: MiddlewareAPI) =>
  (next: (action: any) => void) =>
  async (action: any) => {
    next(action);

    if (action.type.includes(apiRequest.type)) {
      // call api request
      try {
        // dispatch(apiSuccess());
      } catch (error) {
        // parse api error to client error
        // dispatch(apiFail());
      }
    }
  };
