import { combineReducers } from 'redux';

import { fetchTaskList, setTaskList, setError } from '../actions';
import { TaskAction, TaskListState } from '../types';
import { Reducer } from '../../../types';

type ReducerOf<T extends keyof TaskListState> = Reducer<TaskListState, TaskAction, T>;

const data: ReducerOf<'data'> = (state = null, action) => {
  switch (action.type) {
    case setTaskList.type:
      return action.payload;
    default:
      return state;
  }
};

const loading: ReducerOf<'loading'> = (state = false, action) => {
  switch (action.type) {
    case fetchTaskList.type:
      return true;

    case setTaskList.type:
    case setError.type:
      return false;

    default:
      return state;
  }
};

export default combineReducers<TaskListState>({
  data,
  loading,
});
