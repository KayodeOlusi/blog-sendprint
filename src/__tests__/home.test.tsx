/* eslint-disable testing-library/no-node-access */
import HomePage from "../pages/home";
import { render } from "@testing-library/react";
import testHelpers from "../utils/lib/test.helpers";
import { testPosts } from "../utils/data/test.data";
import PostPreview from "../components/post.preview";
import { getTestLayout } from "../utils/lib/test.wrappers";
import useGetPosts from "../utils/hooks/posts/useGetPosts";

jest.mock("../utils/hooks/posts/useGetPosts");
const mockedUseGetPosts = useGetPosts as jest.MockedFunction<
  typeof useGetPosts
>;

describe("Home Page Test", () => {
  beforeEach(() => {
    mockedUseGetPosts.mockReturnValue({
      loading: true,
      error: "",
      posts: [],
    });
  });

  it("should render the home page", () => {
    const homePageElement = getTestLayout(<HomePage />, "react-router");
    render(homePageElement);

    expect(homePageElement).not.toBeNull();
  });

  it("should render the home page title", () => {
    const homePageElement = getTestLayout(<HomePage />, "react-router");
    render(homePageElement);

    const homePageTitle = testHelpers.getElementByText(/all blogs/i);

    expect(homePageTitle).toBeInTheDocument();
    expect(homePageTitle?.textContent).toBe("All Blogs");
  });

  it("should render the search input", () => {
    const homePageElement = getTestLayout(<HomePage />, "react-router");
    render(homePageElement);

    const searchInput = testHelpers.getInputByPlaceholderText(
      "Search for a blog..."
    );

    expect(searchInput).toBeInTheDocument();
  });

  it("should call onChange when the search input is changed", () => {
    const homePageElement = getTestLayout(<HomePage />, "react-router");
    render(homePageElement);

    const searchInput = testHelpers.getInputByPlaceholderText(
      "Search for a blog..."
    ) as HTMLInputElement;

    testHelpers.onChange(searchInput, "test");

    expect(searchInput.value).toBe("test");
  });

  describe("API calls", () => {
    it("should show a loading indicator when the posts are loading", () => {
      const homePageElement = getTestLayout(<HomePage />, "react-router");
      render(homePageElement);

      const loadingIndicator = testHelpers.getElementByText(/loading/i);

      expect(loadingIndicator).toBeInTheDocument();
    });

    it("should show an error message when the posts fail to load", () => {
      mockedUseGetPosts.mockReturnValue({
        error: "Failed to load posts",
        loading: false,
        posts: [],
      });

      const homePageElement = getTestLayout(<HomePage />, "react-router");
      render(homePageElement);

      const errorMessage =
        testHelpers.getElementByText(/failed to load posts/i);

      expect(errorMessage).toBeInTheDocument();
      expect(errorMessage.textContent).toBe("Failed to load posts");
    });

    it("should show the posts when the posts are loaded", () => {
      mockedUseGetPosts.mockReturnValue({
        error: "",
        loading: false,
        posts: testPosts,
      });

      const homePageElement = getTestLayout(<HomePage />, "react-router");
      render(homePageElement);

      const postsContainer = testHelpers.getElementByID("post-container");
      expect(postsContainer?.children.length).toBe(testPosts.length);
    });

    it("should show the title of a post", () => {
      const postPreviewElement = getTestLayout(
        <PostPreview post={testPosts[0]} />,
        "react-router"
      );
      render(postPreviewElement);

      const postTitle = testHelpers.getElementByText(testPosts[0].title);
      expect(postTitle).toBeInTheDocument();
      expect(postTitle).toHaveTextContent(testPosts[0].title);
    });

    it("should navigate to a single post page when a post is clicked", () => {
      const postPreviewElement = getTestLayout(
        <PostPreview post={testPosts[0]} />,
        "react-router"
      );
      render(postPreviewElement);

      const postPreview = testHelpers.getElementByID(
        "post-preview"
      ) as HTMLDivElement;
      testHelpers.clickElement(postPreview);

      expect(window.location.pathname).toBe(`/post/${testPosts[0].id}`);
    });
  });
});
