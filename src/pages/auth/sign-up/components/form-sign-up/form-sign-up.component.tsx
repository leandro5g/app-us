import { useForm, FormProvider } from "react-hook-form";
import { useMutation } from "../../../../../shared/hooks/clients/use-mutation";
import { useNavigation } from "@react-navigation/native";

import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "./sign-up.schema";

import {
  ErrorMessage,
  SuccessMessage,
} from "../../../../../shared/constants/messages";

import { ButtonPrimary } from "../../../../../shared/components/buttons/button-primary/button-primary.component";
import { InputDefault } from "../../../../../shared/components/forms/input-default/input-default.component";
import { AcceptTerms } from "../accept-terms/accept-terms.component";

import { Container, ContentForm } from "./form-sign-up.styles";

const FormSignIn: React.FC = () => {
  const { goBack } = useNavigation();

  const formRest = useForm({
    resolver: yupResolver(signUpSchema),
    defaultValues: {
      is_accepted: false,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = formRest;

  const { isLoading, onSubmit } = useMutation({
    path: "/users",
    onSuccess: goBack,
    erroMessage: ErrorMessage.SIGN_UP,
    successMessage: SuccessMessage.SIGN_UP,
  });

  return (
    <Container>
      <FormProvider {...formRest}>
        <ContentForm>
          <InputDefault
            name="name"
            control={control}
            icon="user"
            placeholder="Nome"
            error={errors?.name?.message as string}
            keyboardType="ascii-capable"
            autoCapitalize="none"
            isLoading={isLoading}
          />

          <InputDefault
            name="email"
            control={control}
            icon="mail"
            placeholder="Email@email.com"
            error={errors?.email?.message as string}
            keyboardType="email-address"
            autoCapitalize="none"
            isLoading={isLoading}
          />
          <InputDefault
            name="password"
            control={control}
            notMargin
            icon="lock"
            placeholder="Senha"
            pass
            autoCapitalize="none"
            error={errors?.password?.message as string}
            keyboardType="ascii-capable"
            isLoading={isLoading}
          />

          <InputDefault
            name="confirm_password"
            control={control}
            notMargin
            icon="lock"
            placeholder="Confirmar senha"
            pass
            autoCapitalize="none"
            error={errors?.password?.message as string}
            keyboardType="ascii-capable"
            isLoading={isLoading}
          />
          <AcceptTerms />
        </ContentForm>

        <ButtonPrimary
          onPress={handleSubmit(onSubmit)}
          isLoading={isLoading}
          textButton="Criar conta"
        />
      </FormProvider>
    </Container>
  );
};

export { FormSignIn };
