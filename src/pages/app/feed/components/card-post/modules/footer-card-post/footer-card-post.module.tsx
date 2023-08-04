import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

import {
  Container,
  IconMessage,
  ContentIcon,
  TextCountComment,
} from "./footer-card-post.styles";

type FooterCardPostProps = {
  data: PostModel;
};

const FooterCardPost: React.FC<FooterCardPostProps> = ({ data }) => {
  const { navigate } = useNavigation();

  const handleNavigate = useCallback(() => {
    navigate(
      "CommentsPost" as never,
      {
        post: data,
      } as never
    );
  }, [data]);

  return (
    <Container>
      <ContentIcon onPress={handleNavigate}>
        <IconMessage />
        {data?.count_comment > 0 && (
          <TextCountComment>{data?.count_comment} Comentários</TextCountComment>
        )}
      </ContentIcon>
    </Container>
  );
};

export { FooterCardPost };
