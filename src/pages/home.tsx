import React from "react";
import { Post } from "../utils/lib/services/types";
import PostPreview from "../components/post.preview";
import useGetPosts from "../utils/hooks/posts/useGetPosts";
import useDebounce from "../utils/hooks/useDebounce";

const HomePage = () => {
  const [keyword, setKeyword] = React.useState("");
  const debouncedKeyword = useDebounce({ initialValue: keyword, delay: 500 });
  const { posts, error, loading } = useGetPosts<Post[]>();
  const [pagination, setPagination] = React.useState({
    start: 0,
    limit: 10,
  });

  const allPosts = React.useMemo(() => {
    return posts.filter(post =>
      post.title.toLowerCase().includes(debouncedKeyword.toLowerCase())
    );
  }, [debouncedKeyword, posts]);

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

  return (
    <div>
      <h3 className="font-bold text-xl">All Blogs</h3>
      <input
        type="text"
        value={keyword}
        placeholder="Search for a blog..."
        onChange={e => setKeyword(e.target.value)}
        className="w-full my-4 border-[1px] border-gray-300 p-2 rounded-sm"
      />

      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      <div id="post-container">
        {allPosts.length > 0 &&
          allPosts
            .slice(pagination.start, pagination.limit)
            .map(post => <PostPreview key={post.id} post={post} />)}
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
