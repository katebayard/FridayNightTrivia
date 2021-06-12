import { Component, OnInit } from '@angular/core';
import { Category} from './category';
import { CATEGORIES} from './mock-content';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TriviaApp';

  categories = CATEGORIES;

  ngOnInit(): void {
  }
  
}
