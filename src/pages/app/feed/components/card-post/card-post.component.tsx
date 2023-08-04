import { TextDefault } from "../../../../../shared/components/texts/text-default/text-default.component";
import { HeaderCardPost } from "./modules/header-card-post/header-card-post.module";
import { FooterCardPost } from "./modules/footer-card-post/footer-card-post.module";

import { Container, ContentText } from "./card-post.styles";

type CardPostProps = {
  inComment?: boolean;
  data: PostModel;
  isAuthor?: boolean;
};

const CardPost: React.FC<CardPostProps> = ({ inComment, data, isAuthor }) => {
  return (
    <Container>
      <HeaderCardPost isAuthor={inComment && isAuthor} post={data} />

      <ContentText>
        <TextDefault type="P1">{data?.content}</TextDefault>
      </ContentText>

      {!inComment && <FooterCardPost data={data} />}
    </Container>
  );
};

export { CardPost };
