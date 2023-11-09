import React from "react";
import { Post } from "../utils/lib/services/types";
import useGetPosts from "../utils/hooks/posts/useGetPosts";
import PostPreview from "../components/post.preview";

const HomePage = () => {
  const { posts, error, loading } = useGetPosts<Post[]>();

  return (
    <div>
      <h3 className="font-bold text-xl">All Blogs</h3>

      {posts.length > 0 ? (
        posts.map(post => <PostPreview key={post.id} post={post} />)
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomePage;
