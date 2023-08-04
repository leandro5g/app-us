import styled from "styled-components/native";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";

import { TextDefault } from "../../../../../shared/components/texts/text-default/text-default.component";
import { ButtonVoid } from "../../../../../shared/components/buttons/button-void/button-void.component";

import { AntDesign } from "@expo/vector-icons";

type ContainerCheckProps = {
  isAccept: boolean;
};

export const Container = styled.View`
  width: 100%;
  margin-top: ${RFValue(12)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  width: 100%;
  align-items: center;
`;

export const ContainerCheck = styled.View<ContainerCheckProps>`
  height: ${RFValue(28)}px;
  width: ${RFValue(28)}px;
  border-radius: ${RFValue(4)}px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-width: ${RFValue(2)}px;
  background-color: ${({ theme, isAccept }) =>
    isAccept ? theme.COLORS.PRIMARY : "transparent"};
  justify-content: center;
  align-items: center;
`;

export const Button = styled(ButtonVoid)`
  width: 75%;
  margin-left: ${RFValue(12)}px;
`;

export const TextDescription = styled(TextDefault).attrs({
  type: "P1",
})``;

export const IconCheck = styled(AntDesign).attrs(({ theme }) => ({
  name: "check",
  color: theme.COLORS.NEUTRAL,
  size: RFValue(22),
}))``;

export const SpanDescription = styled(TextDefault).attrs({
  type: "P1",
})`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
  text-decoration-line: underline;
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.COLORS.DANGER};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.SM}px;
  margin-top: ${RFValue(2)}px;
`;
