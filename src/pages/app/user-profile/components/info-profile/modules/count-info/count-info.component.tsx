import {
  Container,
  ContentInfo,
  TextCount,
  TitleCount,
} from "./count-info.styles";

type CountInfoProps = {
  title: string;
  count: number;
};

const CountInfo: React.FC<CountInfoProps> = ({ title, count }) => {
  return (
    <Container>
      <ContentInfo>
        <TextCount>{count?.toString().padStart(2, "0")}</TextCount>
        <TitleCount>{title}</TitleCount>
      </ContentInfo>
    </Container>
  );
};

export { CountInfo };
