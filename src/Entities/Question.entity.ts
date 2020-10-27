import { Answer } from "./Answer.entity";
import { Post } from "./Post.entity";
import { User } from "./User.entity";

export interface Question {
  id: number;
  createdAt: Date;
  text: string;
  user: User;
  userId: number;
  post: Post;
  postId: number;
  answer?: Answer;
}
