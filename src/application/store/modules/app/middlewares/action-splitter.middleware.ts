import { AnyAction, Middleware } from 'redux';

export const actionSplitterMiddleware: Middleware =
  () => (next: (action: AnyAction) => void) => (action: AnyAction) => {
    if (Array.isArray(action)) {
      action.forEach((actionItem: any) => next(actionItem));
    } else {
      next(action);
    }
  };
