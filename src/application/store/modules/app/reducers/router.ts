import { AppAction } from '../types';

import {
  setCheckRedirectAfterLogin,
  setRouterDefaultRedirectPath,
  setRouterPreventRedirect,
  setRouterPreviousPath,
  setRouterRedirectPath,
} from '../actions/router.actions';

@reducers()
export class RouterReduce {
  defaultRedirectPath(state = '', action: AppAction) {
    if (action.type === setRouterDefaultRedirectPath.type) {
      return action.payload;
    }
    return state;
  }

  redirectPath(state = '', action: AppAction) {
    if (action.type === setRouterRedirectPath.type) {
      return action.payload;
    }
    return state;
  }

  previousPath(state = '', action: AppAction) {
    if (action.type === setRouterPreviousPath.type) {
      return action.payload;
    }
    return state;
  }

  preventRedirect(state = false, action: AppAction) {
    if (action.type === setRouterPreventRedirect.type) {
      return action.payload;
    }
    return state;
  }

  checkRedirectAfterLogin(state = false, action: AppAction) {
    if (action.type === setCheckRedirectAfterLogin.type) {
      return action.payload;
    }
    return state;
  }
}
