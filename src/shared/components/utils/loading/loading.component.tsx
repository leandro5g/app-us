import { Container, Load } from "./loading.styles";

type LoadingProps = {
  isLoading?: boolean;
};
const Loading: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container>
      <Load animating={isLoading} size="small" />
    </Container>
  );
};

export { Loading };
