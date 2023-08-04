import styled from "styled-components/native";
import { TextDefault } from "../../../shared/components/texts/text-default/text-default.component";
import { RFValue } from "../../../shared/libs/responsive-fontsize";

export const Content = styled.View`
  padding: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
`;

export const Scroll = styled.ScrollView``;

export const ContainerTerms = styled.View`
  margin-bottom: ${RFValue(12)}px;
`;

export const Title = styled(TextDefault)`
  margin: ${RFValue(20)}px 0px;
`;

export const TitleSection = styled(TextDefault)`
  margin-bottom: ${RFValue(8)}px;
`;

export const Text = styled(TextDefault)``;
