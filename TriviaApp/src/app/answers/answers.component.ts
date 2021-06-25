import { Component, OnInit, Input } from '@angular/core';
import { Category} from './../category';
import { CATEGORIES} from './../mock-content';
import { Question } from '../question';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css', './../app.component.css']
})
export class AnswersComponent implements OnInit {
  
  categories = CATEGORIES;
  currentCategory? : Category;
  currentAnswer? : Question | null;
  questionArray? : Question[];
  bonusAnswer? : boolean;

  constructor() {
   }

  ngOnInit(): void {
  }
  
  nextAnswer( category : Category): void {
    this.currentCategory = category;
    this.currentAnswer = null;
    this.bonusAnswer = false;
    for( var q of category.questions) {
      if (!q.asked) {
        this.currentAnswer = q;
        this.currentAnswer.asked = true;
        if((q.bonusText.length>0)) {
          this.bonusAnswer = true;
        }
        this.currentCategory.progress += 100 / this.currentCategory.questions.length;
        return;
      }
      
    }
    
  }
    
}


