import Constants from "expo-constants";
import { RFValue } from "../../libs/responsive-fontsize";

export const METRICS: MetricsType = {
  UTILS: {
    STATUS_BAR_HEIGHT: Constants.statusBarHeight,
    BUTTON_SIZE: RFValue(54),
  },

  FONT_SIZE: {
    XS: RFValue(12),
    SM: RFValue(14),
    MD: RFValue(16),
    LG: RFValue(18),
    XL: RFValue(22),
    XXL: RFValue(32),
  },

  LINE_HEIGHT: {
    XS: RFValue(18),
    SM: RFValue(20),
    MD: RFValue(26),
    LG: RFValue(22),
    XL: RFValue(28),
    XXL: RFValue(38),
  },

  PADDING: {
    BASE: 16,
    LARGE: 20,
  },

  BORDER_RADIUS: {
    MD: RFValue(6),
    SM: RFValue(4),
  },
};
