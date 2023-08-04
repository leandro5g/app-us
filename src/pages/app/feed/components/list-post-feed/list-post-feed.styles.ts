import styled from "styled-components/native";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  padding: 0px ${({ theme }) => theme.METRICS.PADDING.BASE}px;
`;

export const Scroll = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    paddingTop: RFValue(90),
    showsVerticalScrollIndicator: false,
  },
}))``;

export const ContainerLoading = styled.View`
  margin-top: ${RFValue(90)}px;
`;
