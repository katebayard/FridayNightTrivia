import { Component, OnInit } from '@angular/core';
import { Category} from './../category';
import { CATEGORIES} from './../mock-content';
import { Question } from '../question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  categories = CATEGORIES;
  currentCategory? : Category;
  currentQuestion? : Question;
  questionArray? : Question[];

  constructor() { }

  ngOnInit(): void {
  }
  
  nextQuestion( category : Category): void {
    this.currentCategory = category;
    for( var q of category.questions) {
      if (!q.asked) {
        this.currentQuestion = q;
        this.currentQuestion.asked = true;
        break;
      }
    }
    
  }

}
