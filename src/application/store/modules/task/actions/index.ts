import { action, withoutPayload, withPayload } from '../../../utilities';
import { Task } from '../../../../types/task';
import { ItemList, ListParams } from '../../../../types';

export const fetchTaskList = action('FETCH_TASKS', withPayload<ListParams>());
export const setTaskList = action('SET_TASK_LIST', withPayload<ItemList<Task>>());
export const setError = action('SET_ERROR', withoutPayload);
