import { useNavigate } from "react-router-dom";
import { Post } from "../utils/lib/services/types";

type Props = {
  post: Post;
};

const PostPreview = ({ post }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      id="post-preview"
      className="shadow-sm p-4 my-4 space-y-3 cursor-pointer hover:shadow-md"
      onClick={() => navigate(`/post/${post.id}`)}
    >
      <h3 className="text-lg capitalize font-medium">{post.title}</h3>
      <p className="text-sm truncate">{post.body}</p>
    </div>
  );
};

export default PostPreview;
