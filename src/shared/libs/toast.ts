import { useCallback } from "react";
import Toast from "react-native-root-toast";
import { useTheme } from "styled-components/native";
import { RFValue } from "./responsive-fontsize";

type ShowToastProps = {
  message: string;
  type: "ERROR" | "SUCCESS";
};

export function useToast() {
  const { COLORS, FONTS, METRICS } = useTheme();

  const showToast = useCallback(
    ({ message, type }: ShowToastProps) => {
      Toast.show(message, {
        containerStyle: {
          marginTop: METRICS.UTILS.STATUS_BAR_HEIGHT + RFValue(10),
        },
        duration: Toast.durations.LONG,
        position: Toast.positions.TOP,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: type === "ERROR" ? COLORS.ALERT : COLORS.SUCCESS,
        opacity: 1,
        textStyle: {
          fontFamily: FONTS.PRIMARY.REGULAR,
          fontSize: METRICS.FONT_SIZE.MD,
          color: COLORS.TEXT_TITLE,
        },
      });
    },
    [Toast]
  );

  return {
    showToast,
  };
}
