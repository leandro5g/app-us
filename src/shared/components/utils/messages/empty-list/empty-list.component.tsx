import { Container, TextMessage, IconEmpty } from "./empty-list.styles";

type EmptyListProps = {
  message: string;
};

const EmptyList: React.FC<EmptyListProps> = ({ message }) => {
  return (
    <Container>
      <IconEmpty />
      <TextMessage>{message}</TextMessage>
    </Container>
  );
};

export { EmptyList };
