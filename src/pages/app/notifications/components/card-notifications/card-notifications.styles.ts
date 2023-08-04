import styled from "styled-components/native";
import { RFValue } from "../../../../../shared/libs/responsive-fontsize";
import { TextDefault } from "../../../../../shared/components/texts/text-default/text-default.component";

type NotificationViewedProps = {
  is_new_notification: boolean;
};

export const Container = styled.View`
  height: ${RFValue(90)}px;
  width: 100%;
  padding: ${({ theme }) => theme.METRICS.PADDING.BASE}px;
  border-bottom-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.COLORS.SHAPE_LIGHT};
  flex-direction: row;
`;

export const Content = styled.View`
  margin-left: ${RFValue(8)}px;
  height: 100%;
  justify-content: space-between;
`;

export const TexNotification = styled.Text<NotificationViewedProps>`
  font-size: ${RFValue(16)}px;
  line-height: ${RFValue(23)}px;
  font-family: ${({ theme, is_new_notification }) =>
    is_new_notification
      ? theme.FONTS.PRIMARY.SEMIBOLD
      : theme.FONTS.PRIMARY.REGULAR};
  color: ${({ theme, is_new_notification }) =>
    is_new_notification ? theme.COLORS.TEXT_TITLE : theme.COLORS.TEXT_LOW};
  text-transform: capitalize;
  width: 90%;
`;

export const DateNotification = styled(TextDefault)<NotificationViewedProps>`
  color: ${({ theme, is_new_notification }) =>
    is_new_notification ? theme.COLORS.NEUTRAL : theme.COLORS.TEXT_LOW};
`;
