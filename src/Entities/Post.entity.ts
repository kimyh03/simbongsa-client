import { Application } from "./Application.entity";
import { Like } from "./Like.entity";
import { Question } from "./Question.entity";
import { User } from "./User.entity";

export enum postCategoryEnum {
  environment = "environment",
  eventSupport = "eventSupport",
  communityService = "communityService",
  ruralAtivity = "ruralAtivity",
}

export enum postRigionEnum {
  Seoul = "Seoul",
  Gyeonggi = "Gyeonggi",
  Incheon = "Incheon",
  Chungcheong = "Chungcheong",
  Jeolla = "Jeolla",
  Gyeongsang = "Gyeongsang",
  Jeju = "Jeju",
}

export interface Post {
  id: number;
  createdAt: string;
  title: string;
  description: string;
  category: postCategoryEnum;
  date: string;
  rigion: postRigionEnum;
  adress: string;
  host: string;
  NumOfRecruitment: number;
  recognizedHours: number;
  isOpened: boolean;
  isCompleted: boolean;
  user: User;
  userId: number;
  applications?: Application[];
  likes?: Like[];
  questions?: Question[];
}
