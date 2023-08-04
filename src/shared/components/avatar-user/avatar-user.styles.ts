import styled, { css } from "styled-components/native";
import { RFValue } from "../../libs/responsive-fontsize";

import { FontAwesome } from "@expo/vector-icons";

import { TextDefault } from "../texts/text-default/text-default.component";

export type AvatarSize = "SMALL" | "LARGE" | "EXTRA_LARGE";

export const SIZES_AVATAR = {
  SMALL: RFValue(40),
  LARGE: RFValue(48),
  EXTRA_LARGE: RFValue(120),
};

type AvatarProps = {
  size: AvatarSize;
};

export const Container = styled.View<AvatarProps>`
  justify-content: center;
  border-width: ${RFValue(2)}px;
  border-color: rgba(50, 50, 56, 0.4);
  background-color: ${({ theme }) => theme.COLORS.SHAPE};

  ${({ size }) => css`
    width: ${SIZES_AVATAR[size]}px;
    height: ${SIZES_AVATAR[size]}px;
    border-radius: ${SIZES_AVATAR[size] / 2}px;
  `}
`;

export const Avatar = styled.Image<AvatarProps>`
  flex: 1;
  border-radius: ${({ size }) => SIZES_AVATAR[size] / 2}px;
`;

export const IconSecret = styled(FontAwesome).attrs(({ theme }) => ({
  name: "user-secret",
  size: RFValue(16),
  color: theme.COLORS.TEXT_LOW,
}))`
  align-self: center;
`;

export const AvatarText = styled(TextDefault).attrs({
  type: "H2",
})`
  align-self: center;
`;
