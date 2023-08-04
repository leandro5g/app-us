import packageJson from "../../../../../../package.json";

import { Container, TextVersionCard } from "./card-version.styles";

const CardVersion: React.FC = () => {
  return (
    <Container>
      <TextVersionCard type="P1">
        With US 2023 - App v{packageJson.version}
      </TextVersionCard>
    </Container>
  );
};

export { CardVersion };
