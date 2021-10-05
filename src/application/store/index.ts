import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import history from '../history';

import { modulesMiddleware, appMiddleware, rootReducer } from './modules';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const appStore = createStore(
  rootReducer(history),
  composeEnhancers(applyMiddleware(...modulesMiddleware, ...appMiddleware)),
);

export default appStore;
