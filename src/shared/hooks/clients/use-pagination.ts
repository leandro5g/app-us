import { useCallback, useRef } from "react";
import { client } from "../../clients/axios";
import { useInfiniteQuery } from "@tanstack/react-query";

type UsePaginationProps = {
  path: string;
};

type TypeData<M> = M & {
  id: string;
};

type PaginationResponse<R> = {
  total_page: number;
  data: TypeData<R>[];
};

export function usePagination<T>({ path }: UsePaginationProps) {
  const pageRef = useRef(0);

  const fetcher = useCallback(
    async (page: number) => {
      const { data } = await client.get<PaginationResponse<TypeData<T>>>(path, {
        params: {
          page,
        },
      });

      pageRef.current++;

      return data;
    },
    [path]
  );

  const {
    data,
    isError,
    isFetching,
    isRefetching,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isInitialLoading,
    refetch,
  } = useInfiniteQuery([path], ({ pageParam = pageRef.current }) =>
    fetcher(pageParam)
  );

  const response = data?.pages.flatMap((page) => page?.data) || [];

  return {
    response,
    isInitialLoading,
    isFetchingNextPage,
    isRefetching,
    isError,
    isFetching,
    fetchNextPage,
    refetch,
    hasNextPage: !!hasNextPage, // Usa !! para converter o valor em um booleano
  };
}
