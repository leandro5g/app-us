import { useUser } from "../../../../../../../shared/hooks/contexts/auth/useUser";

import { AvatarUser } from "../../../../../../../shared/components/avatar-user/avatar-user.component";
import { ProfileAvatarEdit } from "../profile-avatar-edit/profile-avatar-edit.module";

import { Container, Content, NameUser } from "./avatar-user-profile.styles";

const AvatarUserProfile: React.FC = () => {
  const { user } = useUser();

  return (
    <Container>
      <ProfileAvatarEdit />

      <Content>
        <NameUser>{user?.name}</NameUser>
      </Content>
    </Container>
  );
};

export { AvatarUserProfile };
