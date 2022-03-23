import { Tag } from "./tag";

export interface Comment {
  content: string;
  userId: number;
  postId: number;
  tags?:Tag[];
}
