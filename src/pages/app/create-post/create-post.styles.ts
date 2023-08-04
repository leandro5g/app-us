import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ModalComponent = styled.Modal`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BG};
  margin-top: ${({ theme }) => theme.METRICS.UTILS.STATUS_BAR_HEIGHT}px;
`;
