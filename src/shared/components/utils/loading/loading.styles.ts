import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BG};
`;

export const Load = styled(ActivityIndicator).attrs(({ theme }) => ({
  color: theme.COLORS.PRIMARY,
}))``;
