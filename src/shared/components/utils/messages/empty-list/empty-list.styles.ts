import styled from "styled-components/native";

import { MaterialIcons } from "@expo/vector-icons";

import { TextDefault } from "../../../texts/text-default/text-default.component";
import { RFValue } from "../../../../libs/responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-top: 50%;
`;

export const TextMessage = styled(TextDefault).attrs({
  type: "D1",
})`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.MD}px;
  text-align: center;
  margin-top: ${RFValue(10)}px;
  width: 80%;
`;

export const IconEmpty = styled(MaterialIcons).attrs(({ theme }) => ({
  name: "mood-bad",
  color: theme.COLORS.SHAPE,
  size: RFValue(60),
}))``;
