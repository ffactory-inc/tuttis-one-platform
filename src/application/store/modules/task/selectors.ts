import { createSelector } from 'reselect';
import { ApplicationState } from '../../types';

import { TaskListState } from './types';

export const selectTaskList = (state: ApplicationState): TaskListState => state.tasks.list;

export const selectIsLoadingTask = createSelector(selectTaskList, (taskList) => taskList.loading);
