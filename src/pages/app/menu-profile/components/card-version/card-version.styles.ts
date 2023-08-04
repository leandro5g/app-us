import styled from "styled-components/native";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";
import { TextDefault } from "../../../../../shared/components/texts/text-default/text-default.component";

export const Container = styled.View`
  width: 100%;
  padding-top: ${RFValue(20)}px;
  border-top-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.COLORS.SHAPE};
  align-items: center;
`;

export const TextVersionCard = styled(TextDefault)``;
