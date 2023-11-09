import { useNavigate } from "react-router-dom";
import { Post } from "../utils/lib/services/types";

type Props = {
  post: Post;
};

const PostPreview = (props: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className="shadow-sm p-4 my-4 space-y-3 cursor-pointer hover:shadow-md"
      onClick={() => navigate(`/post/${props.post.id}`)}
    >
      <h3 className="text-lg capitalize font-medium">{props.post.title}</h3>
      <p className="text-sm truncate">{props.post.body}</p>
    </div>
  );
};

export default PostPreview;
