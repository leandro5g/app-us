import styled from "styled-components/native";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";

import { ExpoIcons } from "../../../../../shared/components/expo-icons/expo-icons.component";
import { TextDefault } from "../../../../../shared/components/texts/text-default/text-default.component";

export const Container = styled.View`
  height: ${RFValue(80)}px;

  background-color: "rgba(18, 18, 20, .7)";
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;

  padding: 0px ${({ theme }) => theme.METRICS.PADDING.BASE}px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SubTitleHeader = styled(TextDefault).attrs({
  type: "D1",
})`
  margin-top: ${RFValue(6)}px;
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.SM}px;
  line-height: ${({ theme }) => theme.METRICS.FONT_SIZE.SM}px;
`;

export const ContentText = styled.View``;

export const IconNotification = styled(ExpoIcons).attrs(({ theme }) => ({
  name: "notifications",
  size: RFValue(26),
  type: "Ionicons",
}))`
  margin-right: ${RFValue(8)}px;
`;
