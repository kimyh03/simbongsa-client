import { Post } from "./Post.entity";
import { User } from "./User.entity";

export interface Like {
  id: number;
  createdAt: string;
  user: User;
  userId: number;
  post: Post;
  postId: number;
}
