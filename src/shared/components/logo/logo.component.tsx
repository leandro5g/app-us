import { useNavigation } from "@react-navigation/native";

import {
  Container,
  TitleLogo,
  IconUsers,
  IconLeft,
  ButtonIcon,
  SubtitleLogo,
} from "./logo.styles";

type LogoProps = {
  isOnBack?: boolean;
  notLogo?: boolean;
  onPressBack?(): void;
  title?: string;
};

const Logo: React.FC<LogoProps> = ({
  isOnBack,
  notLogo,
  onPressBack,
  title,
}) => {
  const { goBack } = useNavigation();

  return (
    <Container>
      {isOnBack && (
        <ButtonIcon onPress={onPressBack || goBack}>
          <IconLeft />
        </ButtonIcon>
      )}

      {title && <SubtitleLogo type="H1">{title}</SubtitleLogo>}

      {!notLogo && (
        <>
          <IconUsers />

          <TitleLogo>{title || "US"}</TitleLogo>
        </>
      )}
    </Container>
  );
};

export { Logo };
