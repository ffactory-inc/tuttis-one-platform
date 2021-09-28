import { action, withPayload } from '../../../utilities';

export const setRouterPreventRedirect = action(
  'SET_ROUTER_PREVENT_REDIRECT',
  withPayload<boolean>(),
);
export const setRouterDefaultRedirectPath = action(
  'SET_ROUTER_DEFAULT_REDIRECT_PATH',
  withPayload<string>(),
);
export const setRouterRedirectPath = action('SET_ROUTER_REDIRECT_PATH', withPayload<string>());
export const setRouterPreviousPath = action('SET_ROUTER_PREVIOUS_PATH', withPayload<string>());

export const setCheckRedirectAfterLogin = action(
  'SET_CHECK_REDIRECT_AFTER_LOGIN',
  withPayload<boolean>(),
);
