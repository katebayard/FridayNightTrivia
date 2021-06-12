import { Component, OnInit } from '@angular/core';
import { Category} from './../category';
import { CATEGORIES} from './../mock-content';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css']
})
export class CategoryCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories = CATEGORIES;
  

}

