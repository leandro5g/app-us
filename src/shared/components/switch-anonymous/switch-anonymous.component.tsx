import { Controller, useFormContext } from "react-hook-form";

import { TextDefault } from "../texts/text-default/text-default.component";

import { Container, SwitchComponent } from "./switch-anonymous.styles";

type SwitchAnonymousProps = {
  isLarge?: boolean;
};

const SwitchAnonymous: React.FC<SwitchAnonymousProps> = ({ isLarge }) => {
  const { control } = useFormContext();

  const title = isLarge ? "Modo anônimo" : "anônimo";

  return (
    <Container>
      <TextDefault type="D1">{title}</TextDefault>

      <Controller
        control={control}
        name="is_anoymous"
        render={({ field: { onChange, value } }) => (
          <SwitchComponent
            isLarge={isLarge}
            value={value}
            onValueChange={onChange}
          />
        )}
      />
    </Container>
  );
};

export { SwitchAnonymous };
