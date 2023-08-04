import styled from "styled-components/native";
import { RFValue } from "../../../libs/responsive-fontsize";
import { Skeleton } from "moti/skeleton";

export const Container = styled.View``;

export const Content = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.SHAPE};

  padding: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin-bottom: ${RFValue(12)}px;
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS.MD}px;
`;

export const ContentTextLoading = styled.View`
  margin-left: ${RFValue(10)}px;
`;

export const SkeletonView = styled(Skeleton).attrs(({ theme: { COLORS } }) => ({
  colors: ["#29292E", "#202024"],
  transition: {
    type: "timing",
    duration: 800,
  },
}))`
  margin-bottom: ${RFValue(10)}px;
`;

export const Wrapper = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;

export const HeaderLoading = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: ${RFValue(10)}px;
`;
