import { AnyAction, Middleware, MiddlewareAPI } from 'redux';

export const logger: Middleware =
  ({ getState }: MiddlewareAPI) =>
  (next: (action: AnyAction) => void) =>
  (action: AnyAction) => {
    const { REACT_APP_ENV } = process.env;
    if (REACT_APP_ENV === 'development') {
      console.group(`${action.type}`);

      console.group('CURRENT STATE:');
      console.log(getState());
      console.groupEnd();

      next(action);

      console.group('NEXT STATE: ');
      console.log(getState());
      console.groupEnd();

      console.groupEnd();
    } else {
      next(action);
    }
  };
