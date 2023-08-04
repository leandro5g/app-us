import { useMutation } from "../../clients/use-mutation";

type UseDeletePostServiceProps = {
  onSuccess(): void;
  postId: string;
};

export function useDeletePostService({
  onSuccess,
  postId,
}: UseDeletePostServiceProps) {
  const { isLoading, onSubmit } = useMutation({
    path: `/posts/${postId}`,
    erroMessage: "Ocorreu um erro ao apagar o seu post",
    method: "delete",
    onSuccess: onSuccess,
  });

  return {
    isLoading,
    onSubmit,
  };
}
