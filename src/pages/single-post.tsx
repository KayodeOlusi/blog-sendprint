import { useParams } from "react-router-dom";
import { Post } from "../utils/lib/services/types";
import useGetSinglePost from "../utils/hooks/posts/useGetSinglePost";
import SinglePostContainer from "../components/single-post.container";

type Props = {};

const SinglePostPage = (props: Props) => {
  const params = useParams();
  const { id } = params as { id: string };
  const { posts: post, error, loading } = useGetSinglePost<Post>({ id });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return <div>{post && <SinglePostContainer post={post} />}</div>;
};

export default SinglePostPage;
