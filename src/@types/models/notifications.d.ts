declare type NotificationModel = {
  author: {
    avatar?: string;
    id: string;
    name: string;
  };
  is_anonymos: boolean;
  is_new_notification: boolean;
  content: string;
  id: string;
  created_at: string;
};
