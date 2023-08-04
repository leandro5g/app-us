import { useCallback } from "react";
import { useFormContext } from "react-hook-form";
import { useMutation } from "../../../../../shared/hooks/clients/use-mutation";

import { TextAreaInput } from "../text-area-input/text-area-input.component";

import {
  Container,
  FooterPost,
  ButtonSend,
  IconSend,
  LoadButton,
} from "./form-create-post.styles";

type FormData = {
  content: string;
  is_anoymous: boolean;
};

type FormCreatePostProps = {
  onClose(): void;
};

const FormCreatePost: React.FC<FormCreatePostProps> = ({ onClose }) => {
  const { watch, handleSubmit, reset } = useFormContext();

  const onSuccessCreatePost = useCallback(() => {
    reset({
      content: "",
      is_anonymos: false,
    });
    onClose();
  }, []);

  const { isLoading, onSubmit: onMutation } = useMutation({
    path: "/posts",
    onSuccess: onSuccessCreatePost,
  });

  const content = watch("content");

  const onSubmit = useCallback(async ({ content, is_anoymous }: FormData) => {
    await onMutation({
      content,
      is_anonymos: is_anoymous,
    });
  }, []);

  return (
    <Container>
      <TextAreaInput isLoading={isLoading} name="content" />

      <FooterPost>
        <ButtonSend onPress={handleSubmit(onSubmit)} disabled={!content}>
          {isLoading ? <LoadButton animating={isLoading} /> : <IconSend />}
        </ButtonSend>
      </FooterPost>
    </Container>
  );
};

export { FormCreatePost };
