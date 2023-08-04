import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

import { AvatarUser } from "../../../../../shared/components/avatar-user/avatar-user.component";
import { ButtonVoid } from "../../../../../shared/components/buttons/button-void/button-void.component";
import { TextDefault } from "../../../../../shared/components/texts/text-default/text-default.component";
import { useUser } from "../../../../../shared/hooks/contexts/auth/useUser";

import {
  Container,
  IconNotification,
  Content,
  ContentText,
  SubTitleHeader,
} from "./header-feed.styles";
import { useNotifications } from "../../../../../shared/hooks/contexts/app/useNotifications";
import { useTheme } from "styled-components/native";

const HeaderFeed: React.FC = () => {
  const { user } = useUser();
  const { amountNewNotifications } = useNotifications();
  const { COLORS } = useTheme();

  const { navigate } = useNavigation();

  const handleNavigate = useCallback(
    (route: "MenuRoutes" | "Notifications") => {
      navigate(route as never);
    },
    []
  );

  return (
    <Container>
      <ContentText>
        <TextDefault type="H2">Olá, {user?.name.split(" ")?.[0]}</TextDefault>
        <SubTitleHeader type="D1">
          Escreva um desabafo e{"\n"}remova o peso dos seus ombros 💜
        </SubTitleHeader>
      </ContentText>

      <Content>
        <ButtonVoid onPress={() => handleNavigate("Notifications")}>
          <IconNotification
            color={
              amountNewNotifications > 0 ? COLORS.PRIMARY : COLORS.TEXT_DEFAULT
            }
          />
        </ButtonVoid>

        <ButtonVoid onPress={() => handleNavigate("MenuRoutes")}>
          <AvatarUser
            isAnonymos={false}
            size="LARGE"
            name={user?.name}
            URL={user?.avatar}
          />
        </ButtonVoid>
      </Content>
    </Container>
  );
};

export { HeaderFeed };
