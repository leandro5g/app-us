import { ReactNode } from "react";

import { Container, SafeArea } from "./default-background.styles";

type DefaultBackgorundProps = {
  children: ReactNode;
};

const DefaultBackgorund: React.FC<DefaultBackgorundProps> = ({ children }) => {
  return (
    <SafeArea>
      <Container>{children}</Container>
    </SafeArea>
  );
};

export { DefaultBackgorund };
