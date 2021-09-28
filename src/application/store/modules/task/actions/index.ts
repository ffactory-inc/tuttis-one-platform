import { Project } from '../../../types/items';
import { ItemList, ListParams } from '../../../types/main';
import { action, withoutPayload, withPayload } from '../../../utilities';
import { Task } from '../../../../types/task';

export const TASKS = '[Tasks]';

// export const initProjectRequest = action('INIT_PROJECT_REQUEST', withoutPayload);
// export const initProjectSuccess = action('INIT_PROJECT_SUCCESS', withPayload<Project>());
// export const initProjectFail = action('INIT_PROJECT_FAIL', withoutPayload);

// export const createProjectRequest = action('CREATE_PROJECT_REQUEST', withPayload<Project>());
// export const createProjectSuccess = action('CREATE_PROJECT_SUCCESS', withPayload<Project>());
// export const createProjectFail = action('CREATE_PROJECT_FAIL', withoutPayload);

export const getProjectListRequest = action('FETCH_TASKS', withPayload<ListParams>());
export const getProjectListSuccess = action('FETCH_TASKS_SUCCESS', withPayload<ItemList<Task>>());
export const getProjectListFail = action('FETCH_TASKS_FAIL', withoutPayload);
