import { User } from "./User.entity";

export interface Certificate {
  id: number;
  createdAt: string;
  title: string;
  host: string;
  recognizedHours: number;
  date: string;
  user: User;
  userId: number;
}
