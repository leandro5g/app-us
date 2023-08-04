import styled from "styled-components/native";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";

export const Container = styled.View`
  margin: ${RFValue(24)}px 0px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
