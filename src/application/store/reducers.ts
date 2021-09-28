import { combineReducers } from 'redux';

import appReducer from './modules/app/reducers';
import taskReducer from './modules/task/reducers';
// import authReducer from './modules/auth/reducers';
// import userReducer from './modules/tasks/reducers';

const rootReducer = combineReducers({
  app: appReducer,
  task: taskReducer,
});

export default rootReducer;
