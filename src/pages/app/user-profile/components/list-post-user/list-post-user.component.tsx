import { useCallback } from "react";
import { ListRenderItemInfo } from "react-native";

import { usePagination } from "../../../../../shared/hooks/clients/use-pagination";

import { EmptyList } from "../../../../../shared/components/utils/messages/empty-list/empty-list.component";
import { CardPost } from "../../../feed/components/card-post/card-post.component";
import { ActivityLoad } from "../../../../../shared/components/utils/activity-load/activity-load.component";
import { LoadingPost } from "../../../../../shared/components/shimmers-loads/loading-post/loading-post.component";

import { Container, Scroll, TextTitle } from "./list-post-user.styles";

const ListPostUser: React.FC = () => {
  const {
    data,
    handleMore,
    handleRefresh,
    isLoadingPaginate,
    isLoading,
    isRefreshing,
  } = usePagination<PostModel>({ path: "/posts/me" });

  const renderItem = useCallback(({ item }: ListRenderItemInfo<PostModel>) => {
    return <CardPost data={item} />;
  }, []);

  return (
    <Container>
      <TextTitle>Minhas postagens</TextTitle>
      {!isLoading && (
        <Scroll
          keyExtractor={(_, index) => `item-${index}`}
          data={data}
          onEndReachedThreshold={0.9}
          onEndReached={handleMore}
          showsVerticalScrollIndicator={false}
          onRefresh={handleRefresh}
          refreshing={isRefreshing}
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <EmptyList message="Ops, parece que temos nenhum post por aqui.." />
          )}
          ListFooterComponent={<ActivityLoad isLoading={isLoadingPaginate} />}
        />
      )}

      {isLoading && <LoadingPost isLarge={false} />}
    </Container>
  );
};

export { ListPostUser };
