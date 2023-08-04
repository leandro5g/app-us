import styled from "styled-components/native";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const Scroll = styled.FlatList.attrs(() => ({
  contentContainerStyle: {
    showsVerticalScrollIndicator: false,
  },
}))`
  margin-top: ${RFValue(20)}px;
`;

export const ContainerLoading = styled.View`
  margin-top: ${RFValue(20)}px;
`;
