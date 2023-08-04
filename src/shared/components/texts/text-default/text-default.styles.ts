import styled, { css } from "styled-components/native";

export type TextType = "H1" | "H2" | "H3" | "P1" | "D1";

type TextProps = {
  type: TextType;
};

export const Text = styled.Text<TextProps>`
  ${({ theme, type }) =>
    type === "H1" &&
    css`
      color: ${theme.COLORS.TEXT_TITLE};
      font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.XXL}px;
      font-family: ${({ theme }) => theme.FONTS.PRIMARY.BOLD};
    `}

  ${({ theme, type }) =>
    type === "H2" &&
    css`
      color: ${theme.COLORS.TEXT_TITLE};
      font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.LG}px;
      font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
    `}

    ${({ theme, type }) =>
    type === "H3" &&
    css`
      color: ${theme.COLORS.TEXT_TITLE};
      font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.MD}px;
      font-family: ${({ theme }) => theme.FONTS.PRIMARY.SEMIBOLD};
    `}

  ${({ theme, type }) =>
    type === "P1" &&
    css`
      color: ${theme.COLORS.TEXT_DEFAULT};
      font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.SM}px;
      font-family: ${({ theme }) => theme.FONTS.PRIMARY.MEDIUM};
    `}


    ${({ theme, type }) =>
    type === "D1" &&
    css`
      color: ${theme.COLORS.TEXT_LOW};
      font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.XS}px;
      font-family: ${({ theme }) => theme.FONTS.PRIMARY.REGULAR};
    `}
`;
