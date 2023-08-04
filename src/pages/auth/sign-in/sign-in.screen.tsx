import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

import { Logo } from "../../../shared/components/logo/logo.component";
import { TextDefault } from "../../../shared/components/texts/text-default/text-default.component";
import { DefaultBackgorund } from "../../../shared/components/utils/default-backgorund/default-background.component";
import { KeyboardAvoiding } from "../../../shared/components/utils/keyboard-avoiding/keyboard-avoiding.component";
import { KeyboardHandle } from "../../../shared/components/utils/keyboard-handle/keyboard-handle.component";
import { FormSignIn } from "./components/form-sign-in/form-sign-in.component";

import {
  Container,
  SubTitleSignIn,
  ContentText,
  TextRegister,
  TextRegisterSpan,
  ButtonSignIn,
  Content,
} from "./sign-in.styles";

const SignIn: React.FC = () => {
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate("SignUp" as never);
  }, [navigate]);

  return (
    <DefaultBackgorund>
      <KeyboardAvoiding>
        <KeyboardHandle>
          <Container>
            <Logo />

            <Content>
              <ContentText>
                <TextDefault type="H1">Login</TextDefault>
                <SubTitleSignIn>
                  Digite seu e-mail e sua senha, e entre{"\n"}em um ambiente
                  onde todos{"\n"}podem te ajudar 💜
                </SubTitleSignIn>
              </ContentText>

              <FormSignIn />

              <ButtonSignIn onPress={handleNavigate}>
                <TextRegister>Nao possui uma conta? </TextRegister>
                <TextRegisterSpan>Cadastre-se aqui</TextRegisterSpan>
              </ButtonSignIn>
            </Content>
          </Container>
        </KeyboardHandle>
      </KeyboardAvoiding>
    </DefaultBackgorund>
  );
};

export { SignIn };
