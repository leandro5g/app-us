import styled from "styled-components/native";
import { RFValue } from "../../../libs/responsive-fontsize";
import { ExpoIcons } from "../../expo-icons/expo-icons.component";

import { TextDefault } from "../../texts/text-default/text-default.component";

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFValue(10)}px;
  border-bottom-width: ${RFValue(0.6)}px;
  align-items: center;
  padding: ${({ theme }) => theme.METRICS.PADDING.BASE}px;

  border-color: ${({ theme }) => theme.COLORS.SHAPE};
`;

export const ContentIcon = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleCreatePost = styled(TextDefault).attrs({
  type: "H2",
})`
  margin-left: ${RFValue(10)}px;
`;

export const IconLeft = styled(ExpoIcons).attrs(({ theme }) => ({
  name: "arrow-left",
  size: RFValue(30),
  color: theme.COLORS.TEXT_TITLE,
  type: "Feather",
}))``;
