import styled from "styled-components/native";

import { TextDefault } from "../../../shared/components/texts/text-default/text-default.component";

export const Container = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
`;

export const Scroll = styled.ScrollView``;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const ContainerLogo = styled.View``;

export const ContentText = styled.View``;

export const SubTitleSignUp = styled(TextDefault).attrs({
  type: "P1",
})`
  font-size: ${({ theme }) => theme.METRICS.FONT_SIZE.LG}px;
  line-height: ${({ theme }) => theme.METRICS.FONT_SIZE.LG + 6}px;
  margin: ${({ theme }) => theme.METRICS.PADDING.BASE}px 0px;
`;
