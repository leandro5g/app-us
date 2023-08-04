import { useCallback, useRef } from "react";
import { useDeletePostService } from "../../../hooks/services/posts/delete-post";

import {
  ModalOptionContent,
  ModalHandle,
} from "../../modals/modal-option-content/modal-option-content.component";
import { ButtonVoid } from "../button-void/button-void.component";

import { Container, IconOption } from "./button-option-card.styles";

type ButtonOptionCardProps = {
  post: PostModel;
};

const ButtonOptionCard: React.FC<ButtonOptionCardProps> = ({ post }) => {
  const modalRef = useRef<ModalHandle>(null);

  const onSuccessDeleteContent = useCallback(() => {}, [modalRef, post]);

  const { isLoading, onSubmit } = useDeletePostService({
    onSuccess: onSuccessDeleteContent,
    postId: post?.id,
  });

  const openModal = useCallback(() => {
    modalRef?.current?.open();
  }, []);

  const onDeletePost = useCallback(async () => {
    await onSubmit({});
  }, [onSubmit]);

  return (
    <Container>
      <ButtonVoid onPress={openModal}>
        <IconOption />
      </ButtonVoid>

      <ModalOptionContent onDeletePost={onDeletePost} ref={modalRef} />
    </Container>
  );
};

export { ButtonOptionCard };
