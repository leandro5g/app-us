import { useCallback } from "react";
import { ListRenderItemInfo } from "react-native";
import { usePagination } from "../../../../../shared/hooks/clients/use-pagination";

import { ActivityLoad } from "../../../../../shared/components/utils/activity-load/activity-load.component";
import { EmptyList } from "../../../../../shared/components/utils/messages/empty-list/empty-list.component";
import { CardNotifications } from "../card-notifications/card-notifications.component";
import { LoadingNotifications } from "../../../../../shared/components/shimmers-loads/loading-notifications/loading-notifications.component";

import {
  Container,
  ContainerLoading,
  Scroll,
} from "./list-notifications.styles";

const ListNotifications: React.FC = () => {
  const {
    data,
    handleMore,
    handleRefresh,
    isLoading,
    isLoadingPaginate,
    isRefreshing,
  } = usePagination({
    path: "/notifications",
  });

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<NotificationModel>) => {
      return <CardNotifications data={item} />;
    },
    []
  );

  return (
    <Container>
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
            <EmptyList message="Oops, parece que não há nenhuma notificação por aqui..." />
          )}
          ListFooterComponent={<ActivityLoad isLoading={isLoadingPaginate} />}
        />
      )}

      {isLoading && (
        <ContainerLoading>
          <LoadingNotifications />
        </ContainerLoading>
      )}
    </Container>
  );
};

export { ListNotifications };
