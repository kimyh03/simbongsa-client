import { Certificate } from "crypto";
import { Application } from "./Application.entity";
import { Like } from "./Like.entity";
import { Post } from "./Post.entity";
import { Question } from "./Question.entity";

export interface User {
  id: number;
  createdAt: Date;
  email: string;
  username: string;
  password: string;
  avatar?: string;
  activityCount: number;
  activityTime: number;
  posts?: Post[];
  applications?: Application[];
  likes: Like[];
  questions?: Question[];
  certificates?: Certificate[];
}
