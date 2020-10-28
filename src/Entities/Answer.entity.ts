import { Question } from "./Question.entity";

export interface Answer {
  id: number;
  createdAt: string;
  text: string;
  question: Question;
  questionId: number;
}
