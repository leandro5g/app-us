import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
`;

export const Input = styled(TextInput).attrs(({ theme }) => ({
  placeholderTextColor: theme.COLORS.TEXT_DEFAULT,
}))`
  flex: 1;
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.TEXT_TITLE};
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
`;
