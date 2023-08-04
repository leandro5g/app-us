import { TextInputProps } from "react-native";
import { useCallback, useState } from "react";
import { useTheme } from "styled-components";
import { Control, Controller } from "react-hook-form";

import { Feather } from "@expo/vector-icons";

import { ButtonVoid } from "../../buttons/button-void/button-void.component";

import {
  Container,
  Input,
  ContainerInput,
  TextError,
  IconPassword,
  StatusTypeProps,
} from "./input-default.styles";

interface InputDefaultProps extends TextInputProps {
  icon: React.ComponentProps<typeof Feather>["name"];
  notMargin?: boolean;
  control: Control;
  name: string;
  isLoading?: boolean;
  error?: string;
  pass?: boolean;
  isDisable?: boolean;
}

const InputDefault: React.FC<InputDefaultProps> = ({
  icon,
  notMargin,
  control,
  name,
  isLoading,
  error,
  pass,
  isDisable,
  ...rest
}) => {
  const [isFocus, setIsFocus] = useState(false);
  const [isViewInput, setIsViewInput] = useState(pass);

  const { COLORS } = useTheme();

  const onFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const onBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  const handleChangeView = useCallback(() => {
    setIsViewInput((oldValue) => !oldValue);
  }, []);

  const INPUT_STATUS: StatusTypeProps = isDisable
    ? "DISABLE"
    : isFocus
    ? "FOCUS"
    : !!error
    ? "ERROR"
    : "";

  return (
    <Container>
      <ContainerInput status={INPUT_STATUS}>
        <Feather
          name={icon}
          size={16}
          color={
            isFocus
              ? COLORS.PRIMARY
              : isDisable
              ? COLORS.SHAPE
              : COLORS.TEXT_DEFAULT
          }
        />

        <Controller
          name={name}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              onChangeText={onChange}
              value={value}
              onFocus={onFocus}
              onBlur={onBlur}
              placeholderTextColor={COLORS.TEXT_LOW}
              secureTextEntry={isViewInput}
              editable={!isLoading && !isDisable}
              {...rest}
            />
          )}
        ></Controller>

        {pass && (
          <ButtonVoid onPress={handleChangeView}>
            <IconPassword name={isViewInput ? "eye-off" : "eye"} />
          </ButtonVoid>
        )}
      </ContainerInput>
      {!!error && <TextError>{error}</TextError>}
    </Container>
  );
};

export { InputDefault };
