// action types
export const SET_LOADER = 'SET_LOADER';

// action creators
export const setLoader = ({ isLoader, feature }: any) => ({
  type: `${feature} ${SET_LOADER}`,
  payload: isLoader,
  meta: { feature },
});
