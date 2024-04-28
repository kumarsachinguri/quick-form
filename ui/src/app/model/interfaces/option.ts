import { Question } from './question';

export interface Option {
  id: number;
  order: number;
  title: string;
  description: string;
  weightage?: number;
  questions?: Question[];
  createdDate: Date;
}
