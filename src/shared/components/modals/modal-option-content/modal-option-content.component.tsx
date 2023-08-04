import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";

import { Container } from "./modal-option-content.styles";
import { CardMenu } from "../../cards/card-menu/card-menu.component";
import { useTheme } from "styled-components";
import { Alert } from "react-native";

export type ModalHandle = {
  open(): void;
  close(): void;
};

type ModalOptionContentProps = {
  onDeletePost(): Promise<void>;
};

const ModalOptionContent = forwardRef<ModalHandle, ModalOptionContentProps>(
  ({ onDeletePost }, refModal) => {
    const { COLORS } = useTheme();

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    const snapPoints = useMemo(() => ["20%", "30%"], []);

    const handleOpenModal = useCallback(() => {
      bottomSheetModalRef?.current?.present();
    }, [bottomSheetModalRef]);

    const handleCloseModal = useCallback(() => {
      bottomSheetModalRef?.current?.close();
    }, [bottomSheetModalRef]);

    useImperativeHandle(refModal, () => ({
      open: handleOpenModal,
      close: handleCloseModal,
    }));

    const showConfirmDialog = useCallback(() => {
      return Alert.alert(
        "Você tem certeza?",
        "Esta ação é irreversível. O post será apagado permanentemente.",
        [
          {
            text: "Sim, tenho",
            onPress: onDeletePost,
          },

          {
            text: "Não",
          },
        ]
      );
    }, []);

    return (
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        handleStyle={{
          backgroundColor: COLORS.SHAPE_LIGHT,
        }}
        handleIndicatorStyle={{
          backgroundColor: COLORS.SHAPE,
        }}
      >
        <Container>
          <CardMenu
            onPress={showConfirmDialog}
            title="Deletar post"
            icon="delete"
          />
          <CardMenu
            onPress={showConfirmDialog}
            title="Denunciar post"
            icon="flag"
          />
        </Container>
      </BottomSheetModal>
    );
  }
);

export { ModalOptionContent };
