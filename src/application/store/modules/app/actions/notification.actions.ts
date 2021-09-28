// action types
export const SET_NOTIFICATION = 'SET_NOTIFICATION';
export const REMOVE_NOTIFICATION = 'REMOVE_NOTIFICATION';

// action creators
export const setNotification = ({ message, feature }: any) => ({
  type: `${feature} ${SET_NOTIFICATION}`,
  payload: message,
  meta: { feature }
});

export const removeNotification = ({ notificationId, feature }: any) => ({
  type: `${feature} ${REMOVE_NOTIFICATION}`,
  payload: notificationId,
  meta: { feature }
});
