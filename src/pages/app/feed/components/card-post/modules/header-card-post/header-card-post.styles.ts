import styled from "styled-components/native";
import { RFValue } from "../../../../../../../shared/libs/responsive-fontsize";
import { TextDefault } from "../../../../../../../shared/components/texts/text-default/text-default.component";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ContentHeaderCard = styled.View`
  margin-left: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ContentAuthor = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: ${RFValue(8)}px;
`;

export const ContainerName = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextAuthor = styled(TextDefault)`
  color: ${({ theme }) => theme.COLORS.PRIMARY};
`;
