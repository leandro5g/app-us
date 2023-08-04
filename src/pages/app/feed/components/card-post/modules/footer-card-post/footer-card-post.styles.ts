import styled from "styled-components/native";
import { RFValue } from "../../../../../../../shared/libs/responsive-fontsize";

import { ExpoIcons } from "../../../../../../../shared/components/expo-icons/expo-icons.component";
import { TextDefault } from "../../../../../../../shared/components/texts/text-default/text-default.component";
import { ButtonVoid } from "../../../../../../../shared/components/buttons/button-void/button-void.component";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentIcon = styled(ButtonVoid)`
  flex-direction: row;
  align-items: center;
`;

export const TextCountComment = styled(TextDefault).attrs({
  type: "D1",
})`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.SM}px;
  margin-left: ${RFValue(6)}px;
`;

export const IconMessage = styled(ExpoIcons).attrs(({ theme }) => ({
  name: "message1",
  size: RFValue(20),
  color: theme.COLORS.TEXT_LOW,
  type: "AntDesign",
}))``;
