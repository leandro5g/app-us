import styled from "styled-components/native";
import { ActivityIndicator, TextInput } from "react-native";
import { RFValue } from "../../../../../../../shared/libs/responsive-fontsize";

import { Ionicons } from "@expo/vector-icons";
import { ButtonVoid } from "../../../../../../../shared/components/buttons/button-void/button-void.component";

type IconSendProps = {
  disable: boolean;
};

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS.MD}px;
  flex-direction: row;
  align-items: flex-end;
  padding: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
  max-height: ${RFValue(160)}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: flex-end;

  margin-left: ${RFValue(16)}px;
`;

export const LoadInput = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: "small",
  color: theme.COLORS.PRIMARY,
}))``;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.TEXT_LOW,
  multiline: true,
}))`
  flex: 1;
  color: ${({ theme }) => theme.COLORS.TEXT_DEFAULT};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
  overflow-y: scroll;
`;

export const IconSend = styled(Ionicons).attrs(({ theme, disable }) => ({
  name: "ios-send",
  size: RFValue(22),
  color: !disable ? theme.COLORS.TEXT_LOW : theme.COLORS.PRIMARY,
}))<IconSendProps>``;

export const ButtonIcon = styled(ButtonVoid)`
  margin-left: ${RFValue(12)}px;
`;
