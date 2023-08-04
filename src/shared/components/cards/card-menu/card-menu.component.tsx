import { ComponentProps } from "react";

import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  TitleCard,
  ContainerText,
  IconRight,
  SubtitleCard,
  Icon,
  Content,
} from "./card-menu.styles";

type CardMenuProps = {
  title: string;
  subTitle?: string;
  icon?: ComponentProps<typeof AntDesign>["name"];
  onPress(): void;
};

const CardMenu: React.FC<CardMenuProps> = ({
  subTitle,
  title,
  icon,
  onPress,
}) => {
  return (
    <Container activeOpacity={0.9} onPress={onPress}>
      <Content>
        {icon && <Icon name={icon} />}
        <ContainerText>
          <TitleCard type="H2">{title}</TitleCard>
          {subTitle && <SubtitleCard type="P1">{subTitle}</SubtitleCard>}
        </ContainerText>
      </Content>

      <IconRight />
    </Container>
  );
};

export { CardMenu };
