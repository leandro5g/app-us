import styled from "styled-components/native";
import { ExpoIcons } from "../../../../../shared/components/expo-icons/expo-icons.component";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";
import { ActivityIndicator } from "react-native";

type ButtonSendProps = {
  disabled: boolean;
};

export const Container = styled.View`
  flex: 1;
  margin-bottom: ${RFValue(40)}px;
`;

export const FooterPost = styled.View`
  padding: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
  margin-top: ${RFValue(10)}px;
  border-top-width: ${RFValue(0.6)}px;
  border-color: ${({ theme }) => theme.COLORS.SHAPE};
  align-items: flex-end;
`;

export const ButtonSend = styled.TouchableOpacity<ButtonSendProps>`
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS.MD}px;
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.COLORS.SHAPE : theme.COLORS.PRIMARY};
  height: ${RFValue(52)}px;
  width: ${RFValue(52)}px;
`;

export const LoadButton = styled(ActivityIndicator).attrs(({ theme }) => ({
  size: "small",
  color: theme.COLORS.NEUTRAL,
}))``;

export const IconSend = styled(ExpoIcons).attrs(({ theme }) => ({
  type: "Feather",
  name: "send",
  size: RFValue(20),
  color: theme.COLORS.TEXT_TITLE,
}))``;
