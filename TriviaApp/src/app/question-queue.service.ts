import { Injectable } from '@angular/core';
import { Question } from './question';
import { Category } from './category';
import { CATEGORIES } from './mock-content';

@Injectable({
  providedIn: 'root'
})
export class QuestionQueueService {

  questionQueue : Question[];
  revealedQuestions : Question[];

  constructor() {
    this.questionQueue = new Array();
    this.revealedQuestions = new Array();
   }

  addQuestion(q : Question) : void {
    q.asked = true;
    this.questionQueue.push(q);
  }

  removeQuestion(q : Question) : void {
    q.revealed = true;
    this.questionQueue.shift();
    this.revealedQuestions.push(q);
  }
  
  getQueue() : Question[] {
     return this.questionQueue;
  }

  getRevealed() : Question[] {
    return this.revealedQuestions;
  }
}
