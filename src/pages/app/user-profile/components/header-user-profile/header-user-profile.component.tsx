import { useSign } from "../../../../../shared/hooks/contexts/auth/useSign";

import { HeaderTitle } from "../../../../../shared/components/headers/header-title/header-title.component";

import {
  Container,
  IconLogout,
  Content,
  Button,
  IconSetting,
} from "./header-user-profile.styles";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

const HeaderUserProfile: React.FC = () => {
  const { signOut } = useSign();
  const { dispatch } = useNavigation();

  const openMenu = useCallback(() => {
    dispatch(DrawerActions.toggleDrawer());
  }, []);

  return (
    <Container>
      <HeaderTitle title="Meu Perfil">
        <Content>
          <Button isMargin onPress={openMenu}>
            <IconSetting />
          </Button>

          <Button onPress={signOut}>
            <IconLogout />
          </Button>
        </Content>
      </HeaderTitle>
    </Container>
  );
};

export { HeaderUserProfile };
