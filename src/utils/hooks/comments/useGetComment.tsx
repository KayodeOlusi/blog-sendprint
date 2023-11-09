import React from "react";
import { PostsService } from "../../lib/services/posts";
import { CommentsState } from "../../lib/services/types";

type Props = {
  id: string;
};

const useGetComments = <T,>({ id }: Props) => {
  const [commentState, setCommentState] = React.useState<CommentsState<T>>({
    comments: [] as T,
    loading: true,
    error: "",
  });

  const fetchComments = React.useCallback(async () => {
    if (id) {
      await PostsService.getPostComments(id, {
        onSuccess(data) {
          setCommentState({
            comments: data as T,
            loading: false,
            error: "",
          });
        },
        onError(error) {
          setCommentState({
            comments: [] as T,
            loading: false,
            error: "Error fetching comments. Please try again later.",
          });
        },
      });
    }
  }, [id]);

  React.useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  return { ...commentState, setCommentState };
};

export default useGetComments;
