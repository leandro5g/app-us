import { AvatarUser } from "../../../../../../../shared/components/avatar-user/avatar-user.component";
import { ButtonOptionCard } from "../../../../../../../shared/components/buttons/button-option-card/button-option-card.component";
import { TextDefault } from "../../../../../../../shared/components/texts/text-default/text-default.component";
import { formatDate } from "../../../../../../../shared/utils/formate-date";

import {
  Container,
  ContentHeaderCard,
  ContentAuthor,
  TextAuthor,
  ContainerName,
  Content,
} from "./header-card-post.styles";

type HeaderCardPostProps = {
  isAuthor?: boolean;
  post: PostModel;
};

const HeaderCardPost: React.FC<HeaderCardPostProps> = ({ isAuthor, post }) => {
  const nameUser = post?.is_anonymos ? "Usuário Anônimo" : post?.user?.name;

  return (
    <Container>
      <Content>
        <AvatarUser
          isAnonymos={post?.is_anonymos}
          URL={post?.user?.avatar}
          name={nameUser}
        />

        <ContentHeaderCard>
          <ContainerName>
            <TextDefault type="H2">{nameUser}</TextDefault>

            {isAuthor && (
              <ContentAuthor>
                <TextAuthor type="P1">Author</TextAuthor>
              </ContentAuthor>
            )}
          </ContainerName>
          <TextDefault type="D1">
            {formatDate(new Date(post?.created_at))}
          </TextDefault>
        </ContentHeaderCard>
      </Content>

      <ButtonOptionCard post={post} />
    </Container>
  );
};

export { HeaderCardPost };
