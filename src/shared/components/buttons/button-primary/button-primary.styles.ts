import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.METRICS.UTILS.BUTTON_SIZE}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY};
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS.SM}px;
  justify-content: center;
  align-items: center;
`;

export const TextButtonPrimary = styled.Text`
  color: ${({ theme }) => theme.COLORS.TEXT_TITLE};
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
`;

export const Load = styled.ActivityIndicator.attrs(({ theme }) => ({
  size: "small",
  color: theme.COLORS.TEXT_TITLE,
}))``;
