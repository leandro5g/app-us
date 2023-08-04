import styled from "styled-components/native";
import { TextDefault } from "../../../../../shared/components/texts/text-default/text-default.component";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";

export const Container = styled.View`
  width: 100%;
  padding: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin-bottom: ${RFValue(12)}px;
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS.MD}px;
  flex-direction: row;
  align-items: flex-start;
`;

export const Content = styled.View`
  margin-left: ${({ theme }) => theme.METRICS.PADDING.BASE}px;

  flex: 1;
`;

export const ContentAuthor = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${RFValue(6)}px;
`;

export const ContainerName = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextAuthor = styled(TextDefault)`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  margin-left: ${RFValue(8)}px;
`;

export const ContentText = styled.View`
  flex: 1;
  margin-top: ${RFValue(6)}px;
`;

export const TextHours = styled(TextDefault).attrs({
  type: "D1",
})``;

export const ContentHeader = styled.View``;
