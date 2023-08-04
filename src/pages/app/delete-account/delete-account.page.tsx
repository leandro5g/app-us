import { useCallback } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useMutation } from "../../../shared/hooks/clients/use-mutation";
import { useUser } from "../../../shared/hooks/contexts/auth/useUser";
import { useSign } from "../../../shared/hooks/contexts/auth/useSign";

import {
  deleteAccountSchema,
  FormDataDeleteAccount,
} from "./delete-account.schema";

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
  DescriptionInfo,
} from "./delete-account.styles";

const DeleteAccount: React.FC = () => {
  const { user } = useUser();
  const { signOut } = useSign();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(deleteAccountSchema),
  });

  const { isLoading, onSubmit } = useMutation({
    method: "delete",
    path: `/profile/${user?.id}`,
    onSuccess: signOut,
    erroMessage: "Senha incorreta. Por favor, verifique e tente novamente.",
    successMessage:
      "Sua conta foi excluída com sucesso. Esperamos vê-lo novamente em breve!",
  });

  const handleDeleteUser = useCallback(
    async ({ password }: FormDataDeleteAccount) => {
      await onSubmit({
        password,
      });
    },
    []
  );

  return (
    <DefaultBackgorund>
      <KeyboardAvoiding>
        <KeyboardHandle>
          <Container>
            <Logo isOnBack notLogo />

            <Content>
              <TextDefault type="H1">Apagar Conta</TextDefault>

              <SubTitleDeleteAccount>
                Para prosseguir com a exclusão de sua conta, por favor, confirme
                sua senha
              </SubTitleDeleteAccount>

              <ContainerForm>
                <InputDefault
                  pass
                  placeholder="Digite sua senha"
                  icon="lock"
                  name="password"
                  isLoading={isLoading}
                  control={control}
                  keyboardType="ascii-capable"
                  autoCapitalize="none"
                  error={errors?.password?.message as string}
                />
                <InputDefault
                  pass
                  isLoading={isLoading}
                  placeholder="Confirme sua senha"
                  icon="lock"
                  name="confirm_password"
                  control={control}
                  keyboardType="ascii-capable"
                  autoCapitalize="none"
                  error={errors?.confirm_password?.message as string}
                />

                <DescriptionInfo>
                  Esta ação é permanente e apagará permanentemente todos os
                  dados da sua conta, incluindo seus posts, comentários e
                  informações pessoais. Tem certeza de que deseja excluir sua
                  conta? Esta ação não pode ser desfeita.
                </DescriptionInfo>
              </ContainerForm>

              <ButtonPrimary
                isLoading={isLoading}
                onPress={handleSubmit(handleDeleteUser)}
                textButton="Apagar contar"
              />
            </Content>
          </Container>
        </KeyboardHandle>
      </KeyboardAvoiding>
    </DefaultBackgorund>
  );
};

export { DeleteAccount };
