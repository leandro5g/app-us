import { ThemeProvider } from "styled-components/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthContextProvider } from "../../contexts/auth-contexts/auth";
import { RootSiblingParent } from "react-native-root-siblings";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "../libs/react-query";

import { DARK_THEME } from "../designs/themes/dark.theme";

type AppProviderProps = {
  children: React.ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={DARK_THEME}>
        <BottomSheetModalProvider>
          <RootSiblingParent>
            <AuthContextProvider>
              <SafeAreaProvider>{children}</SafeAreaProvider>
            </AuthContextProvider>
          </RootSiblingParent>
        </BottomSheetModalProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export { AppProvider };
