import { Component, OnInit } from '@angular/core';
import { Article } from '../../../Models/Blog/Article'

@Component({
  
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {

  articlesList: Array<Article> = [
   new Article ( 1,'title1' ),
   new Article ( 2,'title2' ),
   new Article ( 3,'title3' ),
   new Article ( 4,'title4' ),
   new Article ( 5,'title5' ),
   new Article ( 6,'title6' )

  ];
  displayedColumns = ['id', 'title', 'content', 'action'];

  constructor() {


   }

  ngOnInit() {
  }

}
