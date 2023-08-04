import styled from "styled-components/native";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";

import { ExpoIcons } from "../../../../../shared/components/expo-icons/expo-icons.component";

const BUTTON_SIZE = 60;

export const Container = styled.View`
  height: ${RFValue(BUTTON_SIZE)}px;
  width: ${RFValue(BUTTON_SIZE)}px;
  border-radius: ${RFValue(BUTTON_SIZE / 2)}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};

  justify-content: center;
  align-items: center;

  position: absolute;
  z-index: 99999;
  bottom: ${RFValue(30)}px;
  right: ${RFValue(40)}px;
`;

export const IconAdd = styled(ExpoIcons).attrs(({ theme }) => ({
  name: "md-add",
  size: RFValue(40),
  color: theme.COLORS.TEXT_TITLE,
  type: "Ionicons",
}))``;
