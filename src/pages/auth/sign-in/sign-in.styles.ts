import styled from "styled-components/native";
import { RFValue } from "../../../shared/libs/responsive-fontsize";

import { ButtonVoid } from "../../../shared/components/buttons/button-void/button-void.component";
import { TextDefault } from "../../../shared/components/texts/text-default/text-default.component";

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
  justify-content: center;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ContentText = styled.View``;

export const SubTitleSignIn = styled(TextDefault).attrs({
  type: "P1",
})`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.LG}px;
  line-height: ${({ theme }) => theme.METRICS.FONT_SIZE.LG + 6}px;
  margin: ${({ theme }) => theme.METRICS.PADDING.BASE}px 0px;
`;

export const TextRegister = styled(TextDefault).attrs({
  type: "P1",
})``;

export const TextRegisterSpan = styled(TextDefault).attrs({
  type: "P1",
})`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;

export const ButtonSignIn = styled(ButtonVoid)`
  flex-direction: row;
  align-items: center;
  align-self: center;
  margin-top: ${RFValue(30)}px;
`;
