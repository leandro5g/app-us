import { NavigationContainer } from "@react-navigation/native";

import { useAuthenticate } from "../shared/hooks/contexts/auth/useAuthenticate";

import { AppRoutes } from "./app-routes/app.routes";
import { AuthRoutes } from "./auth-routes/auth.routes";
import { useSign } from "../shared/hooks/contexts/auth/useSign";
import { Loading } from "../shared/components/utils/loading/loading.component";

const Routes: React.FC = () => {
  const { token } = useAuthenticate();
  const { isLoadingInitial } = useSign();

  return (
    <NavigationContainer>
      {isLoadingInitial ? (
        <Loading />
      ) : (
        <>{token ? <AppRoutes /> : <AuthRoutes />}</>
      )}
    </NavigationContainer>
  );
};

export { Routes };
