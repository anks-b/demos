import { Component, OnInit } from '@angular/core';
import { Article } from '../../../Models/Blog/Article'
import { ArticlesService } from './service/articles.service';
import { MatSnackBar } from '@angular/material'

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
  displayedColumns = ['sno','id', 'title', 'content', 'action'];

  constructor( public articlesService:ArticlesService, public snackBar:MatSnackBar ) {


   }

  ngOnInit() {

    this.articlesService.getArticles().subscribe( nxt => { 
    
      if(nxt.length >0){
        this.articlesList = nxt;
      }     

     }, err => { 

        this.snackBar.open('Error in loading articles',null, { duration:2500 })

       })
  }

}
