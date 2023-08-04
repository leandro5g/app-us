import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppContexts } from "../../contexts/app-contexts";

import { CommentsPost } from "../../pages/app/comments-post/comments-post.screen";
import { Feed } from "../../pages/app/feed/feed.screen";
import { UserProfile } from "../../pages/app/user-profile/user-profile.screen";
import { MenuRoutes } from "./menu.routes";
import { Notifications } from "../../pages/app/notifications/notifications.page";

const { Navigator, Screen } = createNativeStackNavigator();
const AppRoutes: React.FC = () => {
  return (
    <AppContexts>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Feed" component={Feed} />
        <Screen name="CommentsPost" component={CommentsPost} />
        <Screen name="UserProfile" component={UserProfile} />
        <Screen name="MenuRoutes" component={MenuRoutes} />
        <Screen name="Notifications" component={Notifications} />
      </Navigator>
    </AppContexts>
  );
};

export { AppRoutes };
