import styled from "styled-components/native";

import { FontAwesome5 } from "@expo/vector-icons";
import { RFValue } from "../../libs/responsive-fontsize";
import { ExpoIcons } from "../expo-icons/expo-icons.component";
import { ButtonVoid } from "../buttons/button-void/button-void.component";
import { TextDefault } from "../texts/text-default/text-default.component";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleLogo = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_TITLE};
  font-size: ${RFValue(28)}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
  margin-left: ${RFValue(6)}px;
`;

export const SubtitleLogo = styled(TextDefault)`
  color: ${({ theme }) => theme.COLORS.TEXT_TITLE};
  font-size: ${RFValue(18)}px;
`;

export const ButtonIcon = styled(ButtonVoid)`
  margin-right: ${RFValue(12)}px;
`;

export const IconLeft = styled(ExpoIcons).attrs(({ theme }) => ({
  name: "arrowleft",
  size: RFValue(26),
  color: theme.COLORS.TEXT_TITLE,
  type: "AntDesign",
}))``;

export const IconUsers = styled(FontAwesome5).attrs(({ theme }) => ({
  name: "users",
  size: RFValue(26),
  color: theme.COLORS.TEXT_TITLE,
}))``;
