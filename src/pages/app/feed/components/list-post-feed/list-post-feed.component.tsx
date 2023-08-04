import { useCallback } from "react";
import { ListRenderItemInfo } from "react-native";
import { useUser } from "../../../../../shared/hooks/contexts/auth/useUser";

import { CardPost } from "../card-post/card-post.component";
import { EmptyList } from "../../../../../shared/components/utils/messages/empty-list/empty-list.component";
import { LoadingPost } from "../../../../../shared/components/shimmers-loads/loading-post/loading-post.component";
import { ActivityLoad } from "../../../../../shared/components/utils/activity-load/activity-load.component";

import { Container, Scroll, ContainerLoading } from "./list-post-feed.styles";
import { usePagination } from "../../../../../shared/hooks/clients/use-pagination";

const ListPostFeed: React.FC = () => {
  const { user } = useUser();

  const {
    response,
    fetchNextPage,
    isFetchingNextPage,
    isInitialLoading,
    isRefetching,
    refetch,
    hasNextPage,
  } = usePagination({ path: "/posts" });

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<PostModel>) => {
      return <CardPost data={item} />;
    },
    [user]
  );

  const handleEndReached = useCallback(() => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <Container>
      {!isInitialLoading && (
        <Scroll
          keyExtractor={(_, index) => `item-${index}`}
          data={response}
          onEndReachedThreshold={0.7}
          onEndReached={handleEndReached}
          showsVerticalScrollIndicator={false}
          onRefresh={refetch}
          refreshing={isRefetching}
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <EmptyList message="Oops, parece que não há nenhum post disponível no momento..." />
          )}
          ListFooterComponent={<ActivityLoad isLoading={isFetchingNextPage} />}
        />
      )}

      {isInitialLoading && (
        <ContainerLoading>
          <LoadingPost />
        </ContainerLoading>
      )}
    </Container>
  );
};

export { ListPostFeed };
