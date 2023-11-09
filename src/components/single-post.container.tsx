import SingleComment from "./comment";
import { Comment, Post } from "../utils/lib/services/types";
import useGetComments from "../utils/hooks/comments/useGetComment";

type Props = {
  post: Post;
};

const SinglePostContainer = ({ post }: Props) => {
  const { comments, error, loading } = useGetComments<Comment[]>({
    id: post.id.toString(),
  });

  return (
    <div>
      <div className="single-post-container">
        <h1 className="text-2xl capitalize underline font-medium">
          {post.title}
        </h1>
        <p className="text-base leading-8">{post.body}</p>
      </div>

      <div id="comments-container" className="mt-6">
        <h4>Comments</h4>
        {loading && (
          <p className="text-sm" role="progressbar">
            Loading...
          </p>
        )}
        {error && (
          <p className="text-sm" role="alert">
            {error}
          </p>
        )}
        <div className="border-[1px] border-gray-100 p-3 space-y-5 h-[200px] overflow-y-scroll">
          {comments.map(comment => (
            <SingleComment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePostContainer;
