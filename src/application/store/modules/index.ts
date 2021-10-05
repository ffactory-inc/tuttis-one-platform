import { combineReducers, Middleware } from 'redux';
import { taskMiddleware } from './task/middlewares';
import appReducer from './app/reducers';
import taskReducer from './task/reducers';
import { History } from 'history';

export * from './app/middlewares';

export const modulesMiddleware: Array<Middleware> = [taskMiddleware];

export const rootReducer = (history: History) =>
  combineReducers({
    app: appReducer,
    tasks: taskReducer,
  });
