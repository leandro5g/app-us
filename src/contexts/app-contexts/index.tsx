import { ReactNode } from "react";
import { NotificationContextProvider } from "./notification";

type AppContextsProps = {
  children: ReactNode;
};

const AppContexts: React.FC<AppContextsProps> = ({ children }) => {
  return <NotificationContextProvider>{children}</NotificationContextProvider>;
};

export { AppContexts };
