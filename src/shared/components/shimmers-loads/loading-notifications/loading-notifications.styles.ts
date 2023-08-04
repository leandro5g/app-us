import styled from "styled-components/native";
import { RFValue } from "../../../libs/responsive-fontsize";
import { Skeleton } from "moti/skeleton";

export const Container = styled.View`
  flex: 1;
  margin-top: ${RFValue(20)}px;
`;

export const Content = styled.View`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  height: ${RFValue(80)}px;
  padding: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
  background-color: ${({ theme }) => theme.COLORS.SHAPE};
  margin-bottom: ${RFValue(12)}px;
  border-radius: ${({ theme }) => theme.METRICS.BORDER_RADIUS.MD}px;
  flex-direction: row;
  align-items: center;
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
}))``;

export const Wrapper = styled.View`
  margin-bottom: ${RFValue(10)}px;
`;
