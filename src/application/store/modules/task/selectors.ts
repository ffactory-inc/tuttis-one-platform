import { createSelector } from 'reselect';

import { SelectedTaskState, TaskListState } from './types';
import { AppState } from '../../types';

export const selectTaskList = (state: AppState): TaskListState => state.tasks.list;

export const selectTask = (state: AppState): SelectedTaskState => state.tasks.selected;

export const selectIsLoadingProject = createSelector(
  selectTaskList,
  selectTask,
  (taskList, selectedTask) => taskList.loading || selectedTask.loading,
);
