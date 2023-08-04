import { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useFormContext } from "react-hook-form";

import { ButtonVoid } from "../../../../../shared/components/buttons/button-void/button-void.component";

import {
  Container,
  ContainerCheck,
  TextDescription,
  Button,
  SpanDescription,
  IconCheck,
  TextError,
  Content,
} from "./accept-terms.styles";

const AcceptTerms: React.FC = () => {
  const { navigate } = useNavigation();
  const {
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();

  const isAccept = watch("is_accepted");

  const handleNavigate = useCallback(() => {
    navigate("TermsOfUse" as never);
  }, []);

  const handleSetValue = useCallback(() => {
    setValue("is_accepted", !isAccept);
  }, [isAccept]);

  return (
    <Container>
      <Content>
        <ButtonVoid onPress={handleSetValue}>
          <ContainerCheck isAccept={isAccept}>
            {isAccept && <IconCheck />}
          </ContainerCheck>
        </ButtonVoid>
        <Button onPress={handleNavigate}>
          <TextDescription type="P1">
            Eu concordo com os termos e políticas. Por favor,
            <SpanDescription> leia antes de prosseguir.</SpanDescription>
          </TextDescription>
        </Button>
      </Content>

      {!!errors?.is_accepted?.message && (
        <TextError>{errors.is_accepted.message as string}</TextError>
      )}
    </Container>
  );
};

export { AcceptTerms };
