import { TextDefault } from "../../../../../shared/components/texts/text-default/text-default.component";
import { AvatarUser } from "../../../../../shared/components/avatar-user/avatar-user.component";
import { formatDate } from "../../../../../shared/utils/formate-date";

import {
  Container,
  Content,
  ContentHeader,
  ContentText,
  TextHours,
  ContainerName,
  ContentAuthor,
  TextAuthor,
} from "./card-comment.styles";

type CardCommentProps = {
  data: CommentModel;
  isAuthor: boolean;
  isAnonimous: boolean;
};

const CardComment: React.FC<CardCommentProps> = ({
  data,
  isAuthor,
  isAnonimous,
}) => {
  const nameUser = isAnonimous ? "Usuário Anônimo" : data.user.name;

  return (
    <Container>
      <AvatarUser
        isAnonymos={isAnonimous}
        name={nameUser}
        URL={data?.user?.avatar}
      />

      <Content>
        <ContentHeader>
          <ContainerName>
            <TextDefault type="H2">{nameUser}</TextDefault>
            {isAuthor && <TextAuthor type="D1">Author</TextAuthor>}
          </ContainerName>
          <TextHours type="D1">
            {formatDate(new Date(data?.created_at))}
          </TextHours>
        </ContentHeader>

        <ContentText>
          <TextDefault type="P1">{data?.content}</TextDefault>
        </ContentText>
      </Content>
    </Container>
  );
};

export { CardComment };
