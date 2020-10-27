import { Post } from "./Post.entity";
import { User } from "./User.entity";

export enum applicationStatus {
  pendding = "pendding",
  accepted = "accepted",
  rejected = "rejected",
}

export interface Application {
  id: number;
  createdAt: Date;
  status: applicationStatus;
  user: User;
  userId: number;
  post: Post;
  postId: number;
}
