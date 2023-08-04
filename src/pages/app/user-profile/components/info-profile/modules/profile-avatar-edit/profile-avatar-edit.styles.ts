import styled from "styled-components/native";
import { RFValue } from "../../../../../../../shared/libs/responsive-fontsize";

import { MaterialIcons } from "@expo/vector-icons";

export const Container = styled.View``;

export const ButtonIcon = styled.TouchableOpacity`
  width: ${RFValue(46)}px;
  height: ${RFValue(46)}px;
  border-radius: ${RFValue(25)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  position: absolute;
  z-index: 999;
  bottom: 0;
  right: 0;
`;

export const IconPhoto = styled(MaterialIcons).attrs(({ theme }) => ({
  size: RFValue(24),
  color: theme.COLORS.TEXT_TITLE,
  name: "add-photo-alternate",
}))``;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  color: theme.COLORS.TEXT_TITLE,
}))``;
