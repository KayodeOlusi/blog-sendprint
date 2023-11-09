import React from "react";
import { PostsService } from "../../lib/services/posts";
import { PostsState } from "../../lib/services/types";

type Props = {
  id: string;
};

const useGetSinglePost = <T,>({ id }: Props) => {
  const [postsState, setPostsState] = React.useState<PostsState<T>>({
    posts: null as T,
    loading: true,
    error: "",
  });

  const fetchPost = React.useCallback(async () => {
    await PostsService.getSinglePost(id, {
      onSuccess(data) {
        setPostsState({
          posts: data as T,
          loading: false,
          error: "",
        });
      },
      onError() {
        setPostsState({
          posts: {} as T,
          loading: false,
          error: "Error fetching post. Please try again later.",
        });
      },
    });
  }, [id]);

  React.useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return { ...postsState };
};

export default useGetSinglePost;
