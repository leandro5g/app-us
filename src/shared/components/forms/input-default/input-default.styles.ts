import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";
import { RFValue } from "../../../libs/responsive-fontsize";

import { Feather } from "@expo/vector-icons";

export type StatusTypeProps = "DISABLE" | "FOCUS" | "ERROR" | "";

type StatusProps = {
  status: StatusTypeProps;
};

export const Container = styled.View`
  margin-bottom: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
`;

export const ContainerInput = styled.View<StatusProps>`
  width: 100%;
  height: ${RFValue(52)}px;

  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS.SM}px;

  flex-direction: row;
  align-items: center;
  border-width: ${RFValue(1)}px;
  border-color: transparent;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING.BASE}px;

  ${({ status }) =>
    status === "FOCUS" &&
    css`
      border-color: ${({ theme }) => theme.COLORS.PRIMARY};
    `}

  ${({ status }) =>
    status === "ERROR" &&
    css`
      border-color: ${({ theme }) => theme.COLORS.DANGER};
    `}
`;

export const Input = styled(TextInput)`
  flex: 1;
  margin-left: ${RFValue(10)}px;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.MD}px;
`;

export const TextError = styled.Text`
  color: ${({ theme }) => theme.COLORS.DANGER};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.SM}px;
  margin-top: ${RFValue(2)}px;
`;

export const IconPassword = styled(Feather).attrs(({ theme }) => ({
  size: RFValue(16),
  color: theme.COLORS.PRIMARY,
}))``;
