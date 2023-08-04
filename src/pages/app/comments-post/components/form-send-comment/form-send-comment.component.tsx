import { useRoute } from "@react-navigation/native";
import { memo, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "../../../../../shared/hooks/clients/use-mutation";

import { InputComment } from "./modules/input-comment/input-comment.module";

import { Container } from "./form-send-comment.styles";
import { useUser } from "../../../../../shared/hooks/contexts/auth/useUser";
import { Keyboard } from "react-native";

type FormData = {
  content: string;
  is_anoymous: boolean;
};

type ListCommentsParams = {
  post: PostModel;
};

type FormSendCommentComponentProps = {
  handleAddData(item: CommentModel): void;
};

const FormSendCommentComponent: React.FC<FormSendCommentComponentProps> = ({
  handleAddData,
}) => {
  const { params } = useRoute();
  const restForm = useForm({
    defaultValues: {
      is_anoymous: false,
    },
  });
  const { control, watch, handleSubmit, reset } = restForm;
  const { user } = useUser();

  const { post } = params as ListCommentsParams;

  const onSuccess = useCallback(
    (item: CommentModel) => {
      const newComment = {
        ...item,
        user,
      };

      handleAddData(newComment);
      reset();
      Keyboard.dismiss();
    },
    [handleAddData, user]
  );

  const { isLoading, onSubmit } = useMutation({
    path: "/comments",
    onSuccess,
  });

  const valueContent = watch("content");

  const handleSendComment = useCallback(
    async ({ content, is_anoymous }: FormData) => {
      await onSubmit({
        content: content.trim(),
        post_id: post?.id,
        is_anonymos: is_anoymous,
      });
    },
    [onSubmit, post]
  );

  return (
    <Container>
      <FormProvider {...restForm}>
        <InputComment
          isLoading={isLoading}
          disable={valueContent}
          control={control}
          name="content"
          onSubmit={handleSubmit(handleSendComment)}
        />
      </FormProvider>
    </Container>
  );
};

export const FormSendComment = memo(FormSendCommentComponent);
