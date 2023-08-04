import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";

import {
  Input,
  IconSend,
  Container,
  ButtonIcon,
  LoadInput,
  Content,
} from "./input-comment.styles";
import { SwitchAnonymous } from "../../../../../../../shared/components/switch-anonymous/switch-anonymous.component";

interface InputCommentProps extends TextInputProps {
  control: Control;
  name: string;
  isLoading: boolean;
  disable: boolean;
  onSubmit(): Promise<void>;
}

const InputComment: React.FC<InputCommentProps> = ({
  control,
  name,
  isLoading,
  disable,
  onSubmit,
  ...rest
}) => {
  return (
    <Container>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...field } }) => (
          <Input
            {...field}
            onChangeText={onChange}
            value={value}
            placeholder="Adicionar um comentário"
            {...rest}
          />
        )}
      />

      <Content>
        <SwitchAnonymous />

        <ButtonIcon disabled={!disable || isLoading} onPress={onSubmit}>
          {isLoading ? (
            <LoadInput animating={isLoading} />
          ) : (
            <IconSend disable={disable} />
          )}
        </ButtonIcon>
      </Content>
    </Container>
  );
};

export { InputComment };
