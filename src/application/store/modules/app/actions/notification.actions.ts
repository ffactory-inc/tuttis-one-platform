import { action, withPayload } from '../../../utilities';
import { NotificationPayload, RemoveNotificationPayload } from '../../../../types';

export const setNotification = action('SET_NOTIFICATION', withPayload<NotificationPayload>());
export const removeNotification = action(
  'REMOVE_NOTIFICATION',
  withPayload<RemoveNotificationPayload>(),
);
