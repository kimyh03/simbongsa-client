import { User } from "./User.entity";

export interface Certificate {
  id: number;
  createdAt: Date;
  title: string;
  host: string;
  recognizedHours: number;
  date: Date;
  user: User;
  userId: number;
}
