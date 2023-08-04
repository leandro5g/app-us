import { useCallback, useState } from "react";

import { ButtonVoid } from "../../../../../shared/components/buttons/button-void/button-void.component";
import { CreatePost } from "../../../create-post/create-post.screen";

import { Container, IconAdd } from "./button-float-modal.styles";

const ButtonFloatModal: React.FC = () => {
  const [viewModal, setViewModal] = useState(false);

  const handleToggleModal = useCallback(() => {
    setViewModal((oldValue) => !oldValue);
  }, []);

  return (
    <Container>
      <ButtonVoid onPress={handleToggleModal}>
        <IconAdd />
      </ButtonVoid>

      <CreatePost isVisible={viewModal} onClose={handleToggleModal} />
    </Container>
  );
};

export { ButtonFloatModal };
