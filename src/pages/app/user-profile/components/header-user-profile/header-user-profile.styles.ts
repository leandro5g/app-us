import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";
import { ButtonVoid } from "../../../../../shared/components/buttons/button-void/button-void.component";

type ButtonProps = {
  isMargin?: boolean;
};

export const Container = styled.View``;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled(ButtonVoid)<ButtonProps>`
  flex-direction: row;
  align-items: center;

  margin-right: ${({ isMargin }) => (isMargin ? RFValue(20) : 0)}px;
`;

export const IconLogout = styled(Feather).attrs(({ theme }) => ({
  name: "power",
  size: RFValue(24),
  color: theme.COLORS.NEUTRAL,
}))``;

export const IconSetting = styled(Feather).attrs(({ theme }) => ({
  name: "settings",
  size: RFValue(24),
  color: theme.COLORS.NEUTRAL,
}))``;
