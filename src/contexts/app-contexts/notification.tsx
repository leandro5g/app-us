import { ReactNode, useState } from "react";
import { createContext } from "use-context-selector";
import { useSign } from "../../shared/hooks/contexts/auth/useSign";

type NotificationContextData = {
  amountNewNotifications: number;
};

const NotificationContext = createContext<NotificationContextData>(
  {} as NotificationContextData
);

type NotificationContextProviderProps = {
  children: ReactNode;
};

const NotificationContextProvider: React.FC<
  NotificationContextProviderProps
> = ({ children }) => {
  const { countNewNotifications } = useSign();

  const [amountNewNotifications, setAmountNewNotifications] = useState(
    countNewNotifications
  );

  return (
    <NotificationContext.Provider
      value={{
        amountNewNotifications,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContextProvider, NotificationContext };
