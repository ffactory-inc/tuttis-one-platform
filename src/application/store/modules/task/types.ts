import * as actions from './actions';
import { Loadable } from '../../types';
import { Task } from '../../../types';
import { ItemList } from '../../../types/main';

// eslint-disable-next-line no-undef
export type TaskAction = ReturnType<ValueOf<typeof actions>>;
export type TaskListState = Loadable<ItemList<Task>>;
export type SelectedTaskState = Loadable<Task>;
