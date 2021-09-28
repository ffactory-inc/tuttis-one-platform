import { ItemList } from '../types/main';
import { Item } from '../types/items';
import rootReducer from './reducers';

export type Reducer<State, Action, Key extends keyof State> = (
  state: State[Key] | undefined,
  action: Action,
) => State[Key];

export interface Fail {
  message: string;
  code?: number;
}

export interface Loadable<T> {
  data: T | null;
  loading: boolean;
  dirty?: boolean;
  error?: boolean;
  refresh?: boolean; // refresh data by SSE
}

export interface ItemState<T extends Item> {
  list: Loadable<ItemList<T>>;
  selected: Loadable<T>;
}

export type AppState = ReturnType<ReturnType<typeof rootReducer>>;
