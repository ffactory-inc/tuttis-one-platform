import { Middleware } from 'redux';
import { fetchTaskList, setError, setTaskList } from '../actions';
import { apiFail, apiRequest, apiSuccess } from '../../app/actions/api.actions';
import { TaskRepository } from '../../../../services/repositories/TaskRepository';

export const taskMiddleware: Middleware = () => (next) => (action) => {
  next(action);
  switch (action.type) {
    case fetchTaskList.type:
      next(
        apiRequest({
          queryOptions: action.payload,
          serviceMethod: new TaskRepository().list,
          meta: {
            module: 'TASK',
          },
        }),
      );
      break;
    case `TASK ${apiSuccess.type}`:
      next(setTaskList(action.payload));
      break;

    case `TASK ${apiFail.type}`:
      next(setError());
      break;
    default:
      break;
  }
};
