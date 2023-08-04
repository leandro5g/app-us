import styled from "styled-components/native";
import { Switch } from "react-native";
import { RFValue } from "../../libs/responsive-fontsize";

type SwitchComponentProps = {
  isLarge?: boolean;
};

export const Container = styled.View`
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SwitchComponent = styled(Switch).attrs(({ theme }) => ({
  thumbColor: theme.COLORS.TEXT_TITLE,
  trackColor: {
    false: theme.COLORS.TEXT_DEFAULT,
    true: theme.COLORS.PRIMARY,
  },
}))<SwitchComponentProps>`
  transform: scale(${({ isLarge }) => (isLarge ? 0.9 : 0.8)});
`;
