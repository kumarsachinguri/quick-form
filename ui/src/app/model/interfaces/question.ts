import { QuestionType } from '../enum/question-type';
import { Option } from './option';

export interface Question {
  id: number;
  order: number;
  title: string;
  description: string;
  createdDate: Date;
  type: QuestionType;

  details: Text | Rating | Ranking[] | Select | Question[] | Option[];
}

export interface Text {
  type: 'text' | 'number' | 'date' | 'file' | 'email';
  longAnswer: boolean;
}

export interface Rating {
  min: number;
  max: number;
  type: 'Star' | 'Number' | 'Thumb';
}

export interface Ranking {
  option: Option;
  rank: number;
}

export interface Select {
  options: Option[];
  multiple: boolean;
  list: boolean;
}
