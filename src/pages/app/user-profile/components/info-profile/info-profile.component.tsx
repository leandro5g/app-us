import { useUser } from "../../../../../shared/hooks/contexts/auth/useUser";

import { AvatarUserProfile } from "./modules/avatar-user-profile/avatar-user-profile.module";
import { Container } from "./info-profile.styles";
import { CountInfo } from "./modules/count-info/count-info.component";

const InfoProfile: React.FC = () => {
  const { user } = useUser();

  return (
    <Container>
      <CountInfo count={user?.total_post} title="Postagens" />
      <AvatarUserProfile />
      <CountInfo
        count={user?.total_comments}
        title={`Pessoas${"\n"}ajudadas`}
      />
    </Container>
  );
};

export { InfoProfile };
