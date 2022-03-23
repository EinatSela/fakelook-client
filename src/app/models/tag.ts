import { Post } from "./Post";

export interface Tag {
  id?: number;
  content: string;
  post? : Post;
  comment?: Comment;
}