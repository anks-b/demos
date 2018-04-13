import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'articles',  
  template:  `<router-outlet></router-outlet>`  
})
export class ArticlesComponent implements OnInit {


  constructor() {
   }

  ngOnInit() {
  }

}
