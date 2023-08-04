import styled from "styled-components/native";
import { RFValue } from "../../../shared/libs/responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BG};
`;

export const ContainerButton = styled.View`
  padding-left: ${({ theme }) => theme.METRICS.PADDING.BASE}px;

  margin-bottom: ${RFValue(20)}px;
`;
