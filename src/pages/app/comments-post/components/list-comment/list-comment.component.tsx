import { useRoute } from "@react-navigation/native";
import { useCallback, useRef } from "react";
import { FlatList, ListRenderItemInfo } from "react-native";

import { usePagination } from "../../../../../shared/hooks/clients/use-pagination";

import { CardPost } from "../../../feed/components/card-post/card-post.component";
import { CardComment } from "../card-comment/card-comment.component";
import { FormSendComment } from "../form-send-comment/form-send-comment.component";
import { EmptyList } from "../../../../../shared/components/utils/messages/empty-list/empty-list.component";
import { ActivityLoad } from "../../../../../shared/components/utils/activity-load/activity-load.component";

import { Container, List } from "./list-comment.styles";
import { LoadingComments } from "../../../../../shared/components/shimmers-loads/loading-comments/loading-comments.component";

type ListCommentsParams = {
  post: PostModel;
};

const ListComment: React.FC = () => {
  const { params } = useRoute();
  const refList = useRef<FlatList>(null);

  const { post } = params as ListCommentsParams;

  const {
    data,
    handleMore,
    handleRefresh,
    isLoadingPaginate,
    isRefreshing,
    handleAddData,
    isLoading,
  } = usePagination<CommentModel>({
    path: `/comments/${post?.id}`,
  });

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<CommentModel>) => {
      const isAnonimous =
        post?.user_id === item?.user_id ? post.is_anonymos : item?.is_anonymos;

      return (
        <CardComment
          isAnonimous={isAnonimous}
          data={item}
          isAuthor={post.user_id === item.user_id}
        />
      );
    },
    [post]
  );

  const handleAddNewComment = useCallback(
    (newItem: CommentModel) => {
      handleAddData(newItem);
    },
    [handleAddData, data]
  );

  return (
    <Container>
      <CardPost isAuthor inComment data={post} />
      {!isLoading && (
        <List
          ref={refList}
          data={data}
          onEndReached={handleMore}
          onEndReachedThreshold={0.9}
          refreshing={isRefreshing}
          onRefresh={handleRefresh}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          ListEmptyComponent={() => (
            <EmptyList message="Esse post ainda não possui nenhum comentário.." />
          )}
          ListFooterComponent={<ActivityLoad isLoading={isLoadingPaginate} />}
        />
      )}

      {isLoading && <LoadingComments />}

      <FormSendComment handleAddData={handleAddNewComment} />
    </Container>
  );
};

export { ListComment };
