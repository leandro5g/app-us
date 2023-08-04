import styled from "styled-components/native";

import { TextDefault } from "../../../../../../../shared/components/texts/text-default/text-default.component";
import { RFValue } from "../../../../../../../shared/libs/responsive-fontsize";

export const Container = styled.View`
  align-items: center;
`;

export const ContentInfo = styled.View`
  align-items: center;
  margin: ${RFValue(14)}px 0px; ;
`;

export const TextCount = styled(TextDefault).attrs({
  type: "H2",
})``;

export const TitleCount = styled(TextDefault).attrs({
  type: "P1",
})`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.XS}px;
  text-align: center;
`;
