import { useForm } from "react-hook-form";
import { useCallback } from "react";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  updatePasswordSchema,
  FormDataUpdatePassword,
} from "./update-password.schema";

import { ButtonPrimary } from "../../../shared/components/buttons/button-primary/button-primary.component";
import { Logo } from "../../../shared/components/logo/logo.component";
import { TextDefault } from "../../../shared/components/texts/text-default/text-default.component";
import { DefaultBackgorund } from "../../../shared/components/utils/default-backgorund/default-background.component";
import { KeyboardAvoiding } from "../../../shared/components/utils/keyboard-avoiding/keyboard-avoiding.component";
import { KeyboardHandle } from "../../../shared/components/utils/keyboard-handle/keyboard-handle.component";
import { InputDefault } from "../../../shared/components/forms/input-default/input-default.component";

import {
  Container,
  SubTitleDeleteAccount,
  Content,
  ContainerForm,
} from "./update-password.styles";

const UpdatePassword: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updatePasswordSchema),
  });

  const onSubmit = useCallback(
    ({
      confirm_new_password,
      new_password,
      old_password,
    }: FormDataUpdatePassword) => {},
    []
  );

  return (
    <DefaultBackgorund>
      <KeyboardAvoiding>
        <KeyboardHandle>
          <Container>
            <Logo isOnBack notLogo />

            <Content>
              <TextDefault type="H1">Alterar senha</TextDefault>

              <SubTitleDeleteAccount>
                Digite sua senha atual e a nova senha desejada para atualizar
                suas informações de acesso.
              </SubTitleDeleteAccount>

              <ContainerForm>
                <InputDefault
                  pass
                  placeholder="Digite sua senha atual"
                  icon="lock"
                  name="old_password"
                  control={control}
                  keyboardType="ascii-capable"
                  autoCapitalize="none"
                  error={errors?.old_password?.message as string}
                />
                <InputDefault
                  pass
                  placeholder="Digite sua senha nova"
                  icon="lock"
                  name="new_password"
                  control={control}
                  keyboardType="ascii-capable"
                  autoCapitalize="none"
                  error={errors?.new_password?.message as string}
                />

                <InputDefault
                  pass
                  placeholder="Confirme sua senha nova"
                  icon="lock"
                  name="confirm_new_password"
                  control={control}
                  keyboardType="ascii-capable"
                  autoCapitalize="none"
                  error={errors?.confirm_new_password?.message as string}
                />
              </ContainerForm>

              <ButtonPrimary
                onPress={handleSubmit(onSubmit)}
                textButton="Atualizar senha"
              />
            </Content>
          </Container>
        </KeyboardHandle>
      </KeyboardAvoiding>
    </DefaultBackgorund>
  );
};

export { UpdatePassword };
