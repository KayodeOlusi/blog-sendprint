/* eslint-disable testing-library/no-node-access */
import { render } from "@testing-library/react";
import testHelpers from "../utils/lib/test.helpers";
import SinglePostPage from "../pages/single-post";
import { Comment, Post } from "../utils/lib/services/types";
import { getTestLayout } from "../utils/lib/test.wrappers";
import { emptyPost, testComments, testPosts } from "../utils/data/test.data";
import useGetSinglePost from "../utils/hooks/posts/useGetSinglePost";
import SinglePostContainer from "../components/single-post.container";
import useGetComments from "../utils/hooks/comments/useGetComment";
import CreateCommentForm from "../components/create-comment.form";
import { act } from "react-dom/test-utils";

jest.mock("../utils/hooks/posts/useGetSinglePost");
jest.mock("../utils/hooks/comments/useGetComment");
const mockedUseGetSinglePost = useGetSinglePost as jest.MockedFunction<
  typeof useGetSinglePost<Post>
>;
const mockedUseGetComments = useGetComments as jest.MockedFunction<
  typeof useGetComments<Comment[]>
>;

describe("Single Post Page Test", () => {
  beforeEach(() => {
    mockedUseGetSinglePost.mockReturnValue({
      loading: true,
      error: "",
      posts: emptyPost,
    });

    mockedUseGetComments.mockReturnValue({
      error: "",
      loading: false,
      comments: testComments,
      setCommentState: jest.fn(),
    });
  });

  it("should show a loading indicator when the posts are loading", () => {
    const postPageElement = getTestLayout(<SinglePostPage />, "react-router");
    render(postPageElement);

    const loadingIndicator = testHelpers.getElementByText(/loading/i);

    expect(loadingIndicator).toBeInTheDocument();
  });

  it("should show an error message when the posts fail to load", () => {
    mockedUseGetSinglePost.mockReturnValue({
      error: "Failed to load posts",
      loading: false,
      posts: emptyPost,
    });

    const postPageElement = getTestLayout(<SinglePostPage />, "react-router");
    render(postPageElement);

    const errorMessage = testHelpers.getElementByText(/failed to load posts/i);

    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage.textContent).toBe("Failed to load posts");
  });

  it("should show the post container when a post is loaded", () => {
    mockedUseGetSinglePost.mockReturnValue({
      error: "",
      loading: false,
      posts: testPosts[0],
    });

    const postElement = getTestLayout(<SinglePostPage />, "react-router");
    render(postElement);

    const postContainer = testHelpers.getElementByID("single-post-container");
    expect(postContainer).toBeInTheDocument();
  });

  it("should show the title and body of a post", () => {
    const postElement = getTestLayout(
      <SinglePostContainer post={testPosts[0]} />,
      "static"
    );
    render(postElement);

    const postTitle = testHelpers.getElementByText(testPosts[0].title);
    const postBody = testHelpers.getElementByText(testPosts[0].body);

    expect(postTitle).toBeInTheDocument();
    expect(postTitle).toHaveTextContent(testPosts[0].title);

    expect(postBody).toBeInTheDocument();
    expect(postBody).toHaveTextContent(testPosts[0].body);
  });

  describe("Comments Functionality", () => {
    it("should show all comments for a post when the comments are loaded", () => {
      const postElement = getTestLayout(
        <SinglePostContainer post={testPosts[0]} />,
        "static"
      );
      render(postElement);

      const commentsContainer =
        testHelpers.getElementByID("comments-container");

      expect(commentsContainer).toBeInTheDocument();
      expect(commentsContainer?.children.length).toBe(testComments.length);
    });

    it("should call onChange function when the comment input changes", () => {
      const commentFormElement = getTestLayout(
        <CreateCommentForm onSubmit={jest.fn()} />,
        "static"
      );
      render(commentFormElement);

      const commentInput =
        testHelpers.getInputByPlaceholderText("Add a comment...");

      testHelpers.onChange(commentInput, "New Comment");

      expect(commentInput).toHaveValue("New Comment");
    });

    it("should call onSubmit function when the comment form is submitted", () => {
      const onSubmit = jest.fn();
      const commentFormElement = getTestLayout(
        <CreateCommentForm onSubmit={onSubmit} />,
        "static"
      );
      render(commentFormElement);

      const commentInput =
        testHelpers.getInputByPlaceholderText("Add a comment...");

      testHelpers.onChange(commentInput, "New Comment");

      const commentForm = testHelpers.getElementByID(
        "create-comment-form"
      ) as HTMLFormElement;
      testHelpers.onSubmit(commentForm);

      expect(onSubmit).toHaveBeenCalled();
    });
  });
});
