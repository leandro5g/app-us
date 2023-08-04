import { useForm } from "react-hook-form";
import { useMutation } from "../../../../../shared/hooks/clients/use-mutation";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "./sign-in.schema";
import { useSign } from "../../../../../shared/hooks/contexts/auth/useSign";

import { ButtonPrimary } from "../../../../../shared/components/buttons/button-primary/button-primary.component";
import { InputDefault } from "../../../../../shared/components/forms/input-default/input-default.component";

import { Container, ContentForm } from "./form-sign-in.styles";

const FormSignIn: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });

  const { signIn } = useSign();

  const { isLoading, onSubmit } = useMutation({
    path: "/sessions",
    onSuccess: signIn,
  });

  return (
    <Container>
      <ContentForm>
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
      </ContentForm>

      <ButtonPrimary
        onPress={handleSubmit(onSubmit)}
        isLoading={isLoading}
        textButton="Entrar"
      />
    </Container>
  );
};

export { FormSignIn };
