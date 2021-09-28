import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createTracker } from 'redux-segment';

import rootReducer from './reducers';

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });
const tracker = createTracker();

const index = createStore(rootReducer, composeEnhancers(applyMiddleware(tracker)));

export default index;
