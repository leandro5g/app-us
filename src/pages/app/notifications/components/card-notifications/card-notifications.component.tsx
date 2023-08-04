import { AvatarUser } from "../../../../../shared/components/avatar-user/avatar-user.component";
import { formatDate } from "../../../../../shared/utils/formate-date";

import {
  Container,
  TexNotification,
  Content,
  DateNotification,
} from "./card-notifications.styles";

type CardNotificationsProps = {
  data: NotificationModel;
};

const CardNotifications: React.FC<CardNotificationsProps> = ({ data }) => {
  const nameAuthor = data?.is_anonymos ? "Usuário anônimo" : data?.author?.name;

  const is_new_notification = data?.is_new_notification;

  return (
    <Container>
      <AvatarUser
        isAnonymos={data?.is_anonymos}
        size="SMALL"
        name={nameAuthor}
        URL={data?.author?.avatar}
      />
      <Content>
        <TexNotification is_new_notification={!is_new_notification}>
          {nameAuthor} {data?.content}
        </TexNotification>
        <DateNotification type="D1" is_new_notification={is_new_notification}>
          {formatDate(new Date(data?.created_at))}
        </DateNotification>
      </Content>
    </Container>
  );
};

export { CardNotifications };
