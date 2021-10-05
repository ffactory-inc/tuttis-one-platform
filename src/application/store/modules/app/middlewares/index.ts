import { Middleware } from 'redux';

import { actionSplitter } from './action-splitter';
import { api } from './api';
import { logger } from './logger';
import { normalize } from './normalize';
import { notification } from './notification';

export const appMiddleware: Array<Middleware> = [
  actionSplitter,
  api,
  normalize,
  notification,
  logger,
];
