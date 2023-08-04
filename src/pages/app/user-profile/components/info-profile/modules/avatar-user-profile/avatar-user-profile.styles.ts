import styled from "styled-components/native";
import { TextDefault } from "../../../../../../../shared/components/texts/text-default/text-default.component";
import { RFValue } from "../../../../../../../shared/libs/responsive-fontsize";

export const Container = styled.View`
  align-items: center;
`;

export const Content = styled.View`
  margin-top: ${RFValue(12)}px;
`;

export const NameUser = styled(TextDefault).attrs({
  type: "H2",
})``;
