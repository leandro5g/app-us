import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { SignIn } from "../../pages/auth/sign-in/sign-in.screen";
import { SignUp } from "../../pages/auth/sign-up/sign-up.screen";
import { TermsOfUse } from "../../pages/auth/terms-of-use/terms-of-use.screen";

const { Navigator, Screen } =
  createNativeStackNavigator<AuthRoutesParamsList>();

export function AuthRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="SignIn" component={SignIn} />
      <Screen name="SignUp" component={SignUp} />
      <Screen name="TermsOfUse" component={TermsOfUse} />
    </Navigator>
  );
}
