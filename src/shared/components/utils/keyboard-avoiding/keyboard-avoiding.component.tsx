import React from "react";
import { Platform } from "react-native";
import { useTheme } from "styled-components/native";
import { RFValue } from "../../../libs/responsive-fontsize";

import { Container } from "./keyboard-avoiding.styles";

type KeyboardAvoiding = {
  children: React.ReactNode;
  behavior?: "height" | "padding" | "position";
  isOffset?: boolean;
};

const KeyboardAvoiding: React.FC<KeyboardAvoiding> = ({
  behavior = "padding",
  children,
  isOffset,
}) => {
  const { METRICS } = useTheme();

  return (
    <Container
      keyboardVerticalOffset={isOffset ? METRICS.PADDING.BASE * 3 : 0}
      behavior={Platform.OS === "ios" ? behavior : undefined}
    >
      {children}
    </Container>
  );
};

export { KeyboardAvoiding };
