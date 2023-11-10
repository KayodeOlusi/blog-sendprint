import { Comment, Post } from "../lib/services/types";

export const emptyPost: Post = {} as Post;

export const testPosts: Post[] = [
  {
    id: 1,
    userId: 1,
    title: "Lorem ipsum dolor sit amet.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
  {
    id: 2,
    userId: 1,
    title: "Lorem ipsum dolor sit amet amor.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.",
  },
  {
    id: 3,
    userId: 1,
    title: "Lorem ipsum dolor sit amet.",
    body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
  },
];

export const testComments: Comment[] = [
  {
    id: 1,
    postId: 1,
    name: "Lorem ipsum dolor sit amet.",
    email: "johndoe@gmail.com",
    body: "Lorem ipsum dolor sit amet consectetur speed",
  },
  {
    id: 2,
    postId: 1,
    name: "Lorem ipsum dolor sit amet.",
    email: "janedoe@gmail.com",
    body: "Lorem ipsum dolor sit amet consectetur noah",
  },
];
