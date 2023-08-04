import styled from "styled-components/native";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  padding: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin-bottom: ${RFValue(12)}px;
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS.MD}px;
`;

export const ContentText = styled.View`
  margin: ${RFValue(8)}px 0px;
`;
