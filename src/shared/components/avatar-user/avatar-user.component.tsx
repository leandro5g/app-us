import {
  Container,
  Avatar,
  AvatarSize,
  AvatarText,
  IconSecret,
} from "./avatar-user.styles";

type AvatarUserProps = {
  size?: AvatarSize;
  URL?: string;
  name: string;
  isAnonymos: boolean;
};

const AvatarUser: React.FC<AvatarUserProps> = ({
  size = "SMALL",
  name,
  URL,
  isAnonymos,
}) => {
  return (
    <Container size={size}>
      {isAnonymos ? (
        <IconSecret />
      ) : (
        <>
          {!!URL ? (
            <Avatar
              size={size}
              source={{
                uri: URL,
              }}
            />
          ) : (
            <AvatarText>{name?.[0]}</AvatarText>
          )}
        </>
      )}
    </Container>
  );
};

export { AvatarUser };
