import React from "react";
import { PostsService } from "../../lib/services/posts";

type PostsState<K> = {
  posts: K;
  loading: boolean;
  error: string;
};

const useGetPosts = <T,>() => {
  const [postsState, setPostsState] = React.useState<PostsState<T>>({
    posts: [] as T,
    loading: false,
    error: "",
  });

  const fetchPosts = async () => {
    await PostsService.getPosts({
      onSuccess(data) {
        setPostsState({
          posts: data as T,
          loading: false,
          error: "",
        });
      },
      onError(error) {
        setPostsState({
          posts: [] as T,
          loading: false,
          error: "Error fetching posts. Please try again later.",
        });
      },
    });
  };

  React.useEffect(() => {
    fetchPosts();
  }, []);

  return { ...postsState };
};

export default useGetPosts;
