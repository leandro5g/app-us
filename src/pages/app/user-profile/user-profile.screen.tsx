import { DefaultBackgorund } from "../../../shared/components/utils/default-backgorund/default-background.component";
import { HeaderUserProfile } from "./components/header-user-profile/header-user-profile.component";
import { InfoProfile } from "./components/info-profile/info-profile.component";
import { ListPostUser } from "./components/list-post-user/list-post-user.component";

import { Container } from "./user-profile.styles";

const UserProfile: React.FC = () => {
  return (
    <DefaultBackgorund>
      <HeaderUserProfile />

      <Container>
        <InfoProfile />
        <ListPostUser />
      </Container>
    </DefaultBackgorund>
  );
};

export { UserProfile };
