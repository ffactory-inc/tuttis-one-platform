import { AnyAction, Middleware, MiddlewareAPI } from 'redux';

import { API_REQUEST, apiError, apiSuccess } from '../../actions/api.actions';
import { UserService, GroupService } from '../../../services';

const services: any = {
  userService: new UserService(),
  groupService: new GroupService()
};

export const apiMiddleware: Middleware =
  ({ dispatch }: MiddlewareAPI) =>
  (next: (action: AnyAction) => void) =>
  async (action: AnyAction) => {
    next(action);

    if (action.type.includes(API_REQUEST)) {
      const { service, method, feature, queryOptions, methodArguments } = action.meta;
      try {
        const args = methodArguments || [];
        args.push(queryOptions || {});
        const currentService = services[`${service}`];
        const apiCallback = services[`${service}`][`${method}`];
        const requestAxios = await apiCallback.apply(currentService, args);
        const response = await requestAxios.toAxios();
        const data = response.data?.data;
        dispatch(apiSuccess({ data, feature }));
      } catch (error) {
        dispatch(apiError({ error, feature }));
      }
    }
  };
