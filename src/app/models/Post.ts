import { Tag } from "./tag";

export interface Post {
  id?: number;
  description: string;
  imageSorce: string;
  x_Position: number;
  y_Position: number;
  z_Position: number;
  date: Date;
  userId: number;
  tags?:Tag[];
}
