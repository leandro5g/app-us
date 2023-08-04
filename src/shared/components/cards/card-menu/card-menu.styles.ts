import styled from "styled-components/native";
import { RFValue } from "../../../libs/responsive-fontsize";
import { TextDefault } from "../../texts/text-default/text-default.component";

import { Entypo, AntDesign } from "@expo/vector-icons";

export const Container = styled.TouchableOpacity`
  padding: 0px ${({ theme }) => theme.METRICS.PADDING.BASE}px;

  height: ${RFValue(80)}px;
  width: 100%;
  border-bottom-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.COLORS.SHAPE};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContainerText = styled.View`
  margin-left: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
`;

export const IconRight = styled(Entypo).attrs(({ theme }) => ({
  name: "chevron-right",
  size: RFValue(20),
  color: theme.COLORS.ICON_GRAY,
}))``;

export const Icon = styled(AntDesign).attrs(({ theme }) => ({
  size: RFValue(28),
  color: theme.COLORS.PRIMARY,
}))``;

export const TitleCard = styled(TextDefault)``;

export const SubtitleCard = styled(TextDefault)``;
