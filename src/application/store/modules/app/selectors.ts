import { AppState } from '../../types';
import { RouterState } from './types';

export const selectRouter = (state: AppState): RouterState => state.app.router;
