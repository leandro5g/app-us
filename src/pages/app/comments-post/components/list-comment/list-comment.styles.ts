import styled from "styled-components/native";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
`;

export const List = styled.FlatList`
  margin-bottom: ${RFValue(12)}px;
`;
