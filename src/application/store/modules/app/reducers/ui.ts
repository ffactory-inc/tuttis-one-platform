import { setLoader } from '../actions';
import { Reducer } from '../../../types';
import { AppAction, AppState } from '../types';

type ReducerOf<T extends keyof AppState> = Reducer<AppState, AppAction, T>;

export const loading: ReducerOf<'loading'> = (state = false, action) => {
  if (action.type.includes(setLoader.type)) {
    return true;
  }
  return state;
};
