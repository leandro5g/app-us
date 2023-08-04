declare type PostModel = {
  id: string;
  user_id: string;
  content: string;
  is_anonymos: boolean;
  created_at: string;
  updated_at: string;
  user: UserModal;
  count_comment: number;
};
