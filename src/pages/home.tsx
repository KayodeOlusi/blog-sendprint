import React from "react";
import { Post } from "../utils/lib/services/types";
import PostPreview from "../components/post.preview";
import useGetPosts from "../utils/hooks/posts/useGetPosts";

const HomePage = () => {
  const { posts, error, loading } = useGetPosts<Post[]>();
  const [pagination, setPagination] = React.useState({
    start: 0,
    limit: 10,
  });

  const handlePagination = (type: "next" | "prev") => {
    switch (type) {
      case "next":
        if (pagination.limit < posts.length) {
          setPagination({
            start: pagination.start + 10,
            limit: pagination.limit + 10,
          });
        }
        break;
      case "prev":
        if (pagination.start > 0) {
          setPagination({
            start: pagination.start - 10,
            limit: pagination.limit - 10,
          });
        }
        break;
      default:
        break;
    }

    return window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h3 className="font-bold text-xl">All Blogs</h3>

      <div className="post-container">
        {posts.slice(pagination.start, pagination.limit).map(post => (
          <PostPreview key={post.id} post={post} />
        ))}
      </div>

      <div className="flex text-center space-x-4 my-6">
        <button
          id="pagination-prev"
          disabled={pagination.start === 0}
          onClick={() => handlePagination("prev")}
          className={`w-24 py-1 border-[1px] rounded-md`}
        >
          Prev
        </button>
        <button
          id="pagination-next"
          onClick={() => handlePagination("next")}
          className={`w-24 py-1 border-[1px] rounded-md`}
          disabled={pagination.limit >= posts.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomePage;
