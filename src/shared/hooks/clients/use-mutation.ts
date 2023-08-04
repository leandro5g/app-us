import { useCallback, useState } from "react";
import { client } from "../../clients/axios";
import { useToast } from "../../libs/toast";

type UseMutationProps<T> = {
  onSuccess?(data: T): void;
  onError?(): void;
  path: string;
  method?: "post" | "put" | "delete" | "patch";
  erroMessage?: string;
  successMessage?: string;
};

const MESSAGE_ERROR =
  "Desculpe, ocorreu um erro inesperado durante a requisição. Por favor, tente novamente mais tarde.";

export function useMutation<R>({
  onSuccess,
  onError,
  path,
  method = "post",
  erroMessage,
  successMessage,
}: UseMutationProps<R>) {
  const { showToast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = useCallback(
    async (body: Object) => {
      try {
        setIsLoading(true);

        const response = await client<R>({
          url: path,
          method,
          data: body,
        });

        if (successMessage) {
          showToast({
            message: successMessage,
            type: "SUCCESS",
          });
        }

        if (onSuccess) {
          onSuccess(response?.data);
        }
      } catch (error) {
        const statusError = error?.response?.status || 500;

        const defaultMessage = erroMessage || MESSAGE_ERROR;

        showToast({
          message: statusError === 500 ? MESSAGE_ERROR : defaultMessage,
          type: "ERROR",
        });
        if (onError) {
          onError();
        }
      } finally {
        setIsLoading(false);
      }
    },
    [path, method, onSuccess, onError, erroMessage, successMessage]
  );

  return {
    isLoading,
    onSubmit,
  };
}
