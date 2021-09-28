import * as actions from './actions/router.actions';

export type AppAction = ReturnType<ValueOf<typeof actions>>;

export type StateApp = {
  router: RouterState;
};

export type RouterState = {
  defaultRedirectPath: string;
  redirectPath: string;
  previousPath: string;
  preventRedirect: boolean;
  checkRedirectAfterLogin: boolean;
};

export type Invitation = {
  email: string;
} | null;
