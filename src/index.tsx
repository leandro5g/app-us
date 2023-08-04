import { StatusBar } from "expo-status-bar";

import { Routes } from "./routes/routes";

import { AppProvider } from "./shared/providers/app.provider";

const MyApp: React.FC = () => {
  return (
    <AppProvider>
      <StatusBar backgroundColor="#ffff" translucent style="light" />
      <Routes />
    </AppProvider>
  );
};

export { MyApp };
