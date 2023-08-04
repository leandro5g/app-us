import { Controller, useFormContext } from "react-hook-form";

import { Container, Input } from "./text-area-input.styles";

type TextAreaInputProps = {
  name: string;
  isLoading: boolean;
};

const TextAreaInput: React.FC<TextAreaInputProps> = ({ name, isLoading }) => {
  const { control } = useFormContext();

  return (
    <Container>
      <Controller
        control={control}
        name="content"
        render={({ field: { onChange, value } }) => (
          <Input
            autoCapitalize="sentences"
            autoCorrect={false}
            autoFocus
            onChangeText={onChange}
            editable={!isLoading}
            value={value}
            multiline
            placeholder="Digite aqui seu desabafo...."
          />
        )}
      />
    </Container>
  );
};

export { TextAreaInput };
