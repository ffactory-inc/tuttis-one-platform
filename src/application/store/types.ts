import { rootReducer } from './modules';

export type Reducer<State, Action, Key extends keyof State> = (
  state: State[Key] | undefined,
  action: Action,
) => State[Key];

export interface Loadable<T> {
  data: T | null;
  loading: boolean;
  dirty?: boolean;
  error?: boolean;
  refresh?: boolean; // refresh data by SSE
}

export type ApplicationState = ReturnType<ReturnType<typeof rootReducer>>;
