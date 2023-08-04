import { Logo } from "../../../shared/components/logo/logo.component";
import { TextDefault } from "../../../shared/components/texts/text-default/text-default.component";
import { DefaultBackgorund } from "../../../shared/components/utils/default-backgorund/default-background.component";
import { KeyboardAvoiding } from "../../../shared/components/utils/keyboard-avoiding/keyboard-avoiding.component";
import { KeyboardHandle } from "../../../shared/components/utils/keyboard-handle/keyboard-handle.component";
import { FormSignIn } from "./components/form-sign-up/form-sign-up.component";

import {
  Container,
  ContentText,
  SubTitleSignUp,
  ContainerLogo,
  Content,
  Scroll,
} from "./sign-up.styles";

const SignUp: React.FC = () => {
  return (
    <DefaultBackgorund>
      <Scroll contentContainerStyle={{ flex: 1 }}>
        <KeyboardAvoiding>
          <KeyboardHandle>
            <Container>
              <ContainerLogo>
                <Logo isOnBack />
              </ContainerLogo>

              <Content>
                <ContentText>
                  <TextDefault type="H1">Cadastro</TextDefault>
                  <SubTitleSignUp>
                    Preencha todos os dados abaixo{"\n"}para se cadastrar no US
                  </SubTitleSignUp>
                </ContentText>

                <FormSignIn />
              </Content>
            </Container>
          </KeyboardHandle>
        </KeyboardAvoiding>
      </Scroll>
    </DefaultBackgorund>
  );
};

export { SignUp };
