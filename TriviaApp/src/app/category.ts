
import { Question } from './question';

export interface Category {
    id: number;
    category: string;
    description: string;
    questions: Question[];
  }
  