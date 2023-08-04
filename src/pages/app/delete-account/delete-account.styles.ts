import styled from "styled-components/native";
import { TextDefault } from "../../../shared/components/texts/text-default/text-default.component";
import { RFValue } from "../../../shared/libs/responsive-fontsize";

export const Container = styled.View`
  padding: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const SubTitleDeleteAccount = styled(TextDefault).attrs({
  type: "P1",
})`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.LG}px;
  line-height: ${({ theme }) => theme.METRICS.FONT_SIZE.LG + 6}px;
  margin: ${({ theme }) => theme.METRICS.PADDING.BASE}px 0px;
`;

export const ContainerForm = styled.View`
  margin: ${RFValue(40)}px 0px;
`;

export const DescriptionInfo = styled(TextDefault).attrs({
  type: "P1",
})`
  margin-bottom: ${RFValue(20)}px;
  margin-top: ${RFValue(10)}px;
`;
