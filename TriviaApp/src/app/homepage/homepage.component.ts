import { Component, OnInit } from '@angular/core';
import { Category} from './../category';
import { CATEGORIES} from './../mock-content';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  categories = CATEGORIES;
  
  constructor() { }

  ngOnInit(): void {
  }

}
