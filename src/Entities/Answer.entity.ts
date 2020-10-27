import { Question } from "./Question.entity";

export interface Answer {
  id: number;
  createdAt: Date;
  text: string;
  question: Question;
  questionId: number;
}
