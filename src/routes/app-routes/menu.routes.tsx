import { createDrawerNavigator } from "@react-navigation/drawer";
import { UserProfile } from "../../pages/app/user-profile/user-profile.screen";
import { MenuProfile } from "../../pages/app/menu-profile/menu-profile.page";
import { DeleteAccount } from "../../pages/app/delete-account/delete-account.page";
import { UpdatePassword } from "../../pages/app/update-password/update-password.page";

const { Navigator, Screen } = createDrawerNavigator();

const MenuRoutes: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        drawerPosition: "right",
        drawerStyle: {
          width: "100%",
        },
        swipeEnabled: false,
      }}
      drawerContent={() => <MenuProfile />}
    >
      <Screen name="UserProfile" component={UserProfile} />
      <Screen name="DeleteAccount" component={DeleteAccount} />
      <Screen name="UpdatePassword" component={UpdatePassword} />
    </Navigator>
  );
};

export { MenuRoutes };
