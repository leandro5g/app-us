import styled from "styled-components/native";
import { RFValue } from "../../../libs/responsive-fontsize";

import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: ${RFValue(28)}px;
  height: ${RFValue(28)}px;
  border-radius: ${RFValue(28 / 2)}px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE_LIGHT};
  justify-content: center;
  align-items: center;
`;

export const IconOption = styled(Feather).attrs(({ theme }) => ({
  name: "more-horizontal",
  size: RFValue(22),
  color: theme.COLORS.ICON_GRAY,
}))``;
