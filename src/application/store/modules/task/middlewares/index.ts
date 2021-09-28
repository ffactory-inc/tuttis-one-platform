import { Middleware } from 'redux';

import {
  GROUPS,
  FETCH_GROUPS,
  SELECT_GROUP,
  setGroups,
  setSelectedGroup,
  setError,
} from '../../actions/groups.actions';
import { API_ERROR, API_SUCCESS, apiRequest } from '../../actions/api.actions';
import { setLoader } from '../../actions/ui.actions';
import { setNotification } from '../../actions/notification.actions';

export const groupMiddleware: Middleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case FETCH_GROUPS:
      next([
        apiRequest({
          queryOptions: action.payload,
          service: 'groupService',
          method: 'getGroupsAndUsers',
          feature: GROUPS,
        }),
        setLoader({ isLoader: true, feature: GROUPS }),
      ]);
      break;
    case SELECT_GROUP:
      next(setSelectedGroup({ selectedGroup: action.payload }));
      break;
    case `${GROUPS} ${API_SUCCESS}`:
      next(setGroups({ groups: action.payload }));
      break;

    case `${GROUPS} ${API_ERROR}`:
      next([
        setNotification({ message: action.payload.message, feature: GROUPS }),
        setError({ error: action.payload }),
        setLoader({ isLoader: false, feature: GROUPS }),
      ]);
      break;
    default:
      break;
  }
};
