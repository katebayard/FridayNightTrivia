import { Component, OnInit } from '@angular/core';
import {CATEGORIES} from './../mock-content';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  categories = CATEGORIES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
