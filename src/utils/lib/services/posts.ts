import httpClient from "./client";
import { Post, ServiceOptions } from "./types";

export class PostsService {
  static async getPosts(options?: ServiceOptions) {
    try {
      const posts = await httpClient.get<Post[]>("/posts");
      options?.onSuccess?.(posts);

      return posts;
    } catch (error) {
      options?.onError?.(error);
      return error;
    }
  }

  static async getSinglePost(id: string, options?: ServiceOptions) {
    try {
      const post = await httpClient.get<Post>(`/posts/${id}`);
      options?.onSuccess?.(post);

      return post;
    } catch (error) {
      options?.onError?.(error);
      return error;
    }
  }

  static async getPostComments(id: string, options?: ServiceOptions) {
    try {
      const comments = await httpClient.get<Post>(`/posts/${id}/comments`);
      options?.onSuccess?.(comments);

      return comments;
    } catch (error) {
      options?.onError?.(error);
      return error;
    }
  }
}
