import { FormProvider, useForm } from "react-hook-form";
import { RootSiblingParent } from "react-native-root-siblings";

import { FormCreatePost } from "./components/form-create-post/form-create-post.component";
import { HeaderCreatePost } from "./components/header-create-post/header-create-post.component";

import { ModalComponent, Container } from "./create-post.styles";

type CreatePostProps = {
  isVisible: boolean;
  onClose(): void;
};

const CreatePost: React.FC<CreatePostProps> = ({ isVisible, onClose }) => {
  const { ...methods } = useForm();

  return (
    <ModalComponent
      animationType="slide"
      onRequestClose={onClose}
      visible={isVisible}
      transparent
    >
      <RootSiblingParent>
        <Container>
          <FormProvider {...methods}>
            <HeaderCreatePost onClose={onClose} />
            <FormCreatePost onClose={onClose} />
          </FormProvider>
        </Container>
      </RootSiblingParent>
    </ModalComponent>
  );
};

export { CreatePost };
