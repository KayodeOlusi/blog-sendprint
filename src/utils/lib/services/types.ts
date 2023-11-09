export type ServiceOptions = {
  onSuccess?: <T>(data?: T) => void;
  onError?: (error?: any) => void;
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
