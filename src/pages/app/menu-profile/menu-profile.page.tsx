import { useCallback } from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";

import { Logo } from "../../../shared/components/logo/logo.component";
import { DefaultBackgorund } from "../../../shared/components/utils/default-backgorund/default-background.component";
import { CardMenu } from "../../../shared/components/cards/card-menu/card-menu.component";
import { CardVersion } from "./components/card-version/card-version.component";

import { Container, ContainerButton } from "./menu-profile.styles";

const MenuProfile: React.FC = () => {
  const { dispatch, navigate } = useNavigation();

  const openMenu = useCallback(() => {
    dispatch(DrawerActions.toggleDrawer());
  }, []);

  const handleNavigate = useCallback(
    (route: "DeleteAccount" | "UpdatePassword") => {
      navigate(route as never);
    },
    []
  );

  return (
    <DefaultBackgorund>
      <Container>
        <ContainerButton>
          <Logo onPressBack={openMenu} isOnBack notLogo />
        </ContainerButton>

        <CardMenu
          onPress={() => handleNavigate("DeleteAccount")}
          icon="deleteuser"
          title="Apagar minha conta"
          subTitle="Excluir sua conta e todos os dados"
        />

        <CardMenu
          onPress={() => handleNavigate("UpdatePassword")}
          icon="lock1"
          title="Trocar senha"
          subTitle="Atualize sua senha"
        />

        {/* <CardMenu
          icon="edit"
          title="Atualizar Perfil"
          subTitle="Atualize seus dados"
        /> */}
      </Container>

      <CardVersion />
    </DefaultBackgorund>
  );
};

export { MenuProfile };
