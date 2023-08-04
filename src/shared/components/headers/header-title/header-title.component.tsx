import { useNavigation } from "@react-navigation/native";
import { ReactNode } from "react";

import { ButtonVoid } from "../../buttons/button-void/button-void.component";

import {
  Container,
  TitleCreatePost,
  IconLeft,
  ContentIcon,
} from "./header-title.styles";

type HeaderTitleProps = {
  children?: ReactNode;
  title: string;
  onClose?(): void;
};

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  children,
  title,
  onClose,
}) => {
  const { goBack } = useNavigation();

  return (
    <Container>
      <ContentIcon>
        <ButtonVoid onPress={onClose || goBack}>
          <IconLeft />
        </ButtonVoid>
        <TitleCreatePost>{title}</TitleCreatePost>
      </ContentIcon>

      {children}
    </Container>
  );
};

export { HeaderTitle };
