import { action, withPayload } from '../../../utilities';
import { ApiErrorPayload, ApiRequestPayload, ApiSuccessPayload, ItemList } from '../../../../types';

export const apiRequest = action('API_REQUEST', withPayload<ApiRequestPayload<any>>());
export const apiSuccess = action(
  'API_SUCCESS',
  withPayload<ItemList<any> | ApiSuccessPayload<any>>(),
);
export const apiFail = action('API_FAIL', withPayload<ApiErrorPayload>());
