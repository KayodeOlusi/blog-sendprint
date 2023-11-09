export type ServiceOptions = {
  onSuccess?: <T>(data?: T) => void;
  onError?: (error?: any) => void;
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PostsState<K> = {
  posts: K;
  loading: boolean;
  error: string;
};

export type CommentsState<K> = {
  comments: K;
  loading: boolean;
  error: string;
};
