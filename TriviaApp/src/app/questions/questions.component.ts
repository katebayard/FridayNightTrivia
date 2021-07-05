import { Component, OnInit } from '@angular/core';
import { Category} from './../category';
import { CATEGORIES} from './../mock-content';
import { Question } from '../question';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css', './../app.component.css']
})
export class QuestionsComponent implements OnInit {

  categories = CATEGORIES;
  currentCategory? : Category;
  currentQuestion? : Question | null;
  questionArray? : Question[];
  bonusQuestion? : boolean;
  hint?: boolean;

  constructor() {
   }

  ngOnInit(): void {
  }
  
  nextQuestion( category : Category): void {
    this.currentCategory = category;
    this.currentQuestion = null;
    this.bonusQuestion = false;
    for( var q of category.questions) {
      if (!q.asked) {
        this.currentQuestion = q;
        this.currentQuestion.asked = true;
        if((q.bonusText.length>0)) {
          this.bonusQuestion = true;
        }
        if((q.hint.length>0)) {
          this.hint = true;
        }
        this.currentCategory.progress += 100 / this.currentCategory.questions.length;
        return;
      }
      
    }
    
  }

}
