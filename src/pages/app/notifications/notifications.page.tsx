import { Logo } from "../../../shared/components/logo/logo.component";
import { DefaultBackgorund } from "../../../shared/components/utils/default-backgorund/default-background.component";
import { ListNotifications } from "./components/list-notifications/list-notifications.component";

import { Container } from "./notifications.styles";

const Notifications: React.FC = () => {
  return (
    <DefaultBackgorund>
      <Container>
        <Logo notLogo title="Notificações" isOnBack />

        <ListNotifications />
      </Container>
    </DefaultBackgorund>
  );
};

export { Notifications };
