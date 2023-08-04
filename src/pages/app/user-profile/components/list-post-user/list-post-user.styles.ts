import { FlatList } from "react-native";
import styled from "styled-components/native";
import { TextDefault } from "../../../../../shared/components/texts/text-default/text-default.component";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";

export const Container = styled.View`
  flex: 1;
`;

export const TextTitle = styled(TextDefault).attrs({
  type: "H2",
})`
  margin-bottom: ${RFValue(20)}px;
`;

export const Scroll = styled(FlatList).attrs(() => ({
  contentContainerStyle: {
    showsVerticalScrollIndicator: false,
  },
}))``;
