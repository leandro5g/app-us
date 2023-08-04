import { useContextSelector } from "use-context-selector";
import { NotificationContext } from "../../../../contexts/app-contexts/notification";

export function useNotifications() {
  const amountNewNotifications = useContextSelector(
    NotificationContext,
    (notificationContext) => notificationContext.amountNewNotifications
  );

  return {
    amountNewNotifications,
  };
}
