import { withPayload, actionCreator } from 'application/store/utilities';
import { ItemList, Lead, ListParams, UIError } from 'application/types';
import { API_REQUEST } from './constants';

// action creators
export const fetchLeads = actionCreator(API_REQUEST, withPayload<ListParams>(LEADS));
export const selectLead = actionCreator(SELECT_LEAD, withPayload<ListParams>(LEADS));

export const apiRequest = ({ body, queryOptions, service, method, methodArguments, feature }: any) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: { method, feature, service, queryOptions, methodArguments }
});

export const apiSuccess = ({ data, feature }: any) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: data,
  meta: { feature }
});

export const apiError = ({ error, feature }: any) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature }
});
