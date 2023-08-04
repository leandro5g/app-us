import { useCallback } from "react";
import { useMutation } from "../../../../../../../shared/hooks/clients/use-mutation";
import { pickImage } from "../../../../../../../shared/libs/picker-image";

import { useUser } from "../../../../../../../shared/hooks/contexts/auth/useUser";

import { AvatarUser } from "../../../../../../../shared/components/avatar-user/avatar-user.component";

import {
  Container,
  ButtonIcon,
  IconPhoto,
  Load,
} from "./profile-avatar-edit.styles";

const ProfileAvatarEdit: React.FC = () => {
  const { user, updateUser } = useUser();

  const { isLoading, onSubmit } = useMutation({
    path: "/users/avatar",
    method: "put",
    onSuccess: updateUser,
    erroMessage: "Ocorreu um erro ao atualizar sua foto de perfil.",
  });

  const handlePickImage = useCallback(async () => {
    const fileUri = await pickImage();

    await onSubmit({
      avatar: fileUri,
    });
  }, [onSubmit]);

  return (
    <Container>
      <AvatarUser size="EXTRA_LARGE" name={user?.name} URL={user?.avatar} />
      <ButtonIcon
        disabled={isLoading}
        activeOpacity={0.9}
        onPress={handlePickImage}
      >
        {isLoading ? <Load size="small" /> : <IconPhoto />}
      </ButtonIcon>
    </Container>
  );
};

export { ProfileAvatarEdit };
