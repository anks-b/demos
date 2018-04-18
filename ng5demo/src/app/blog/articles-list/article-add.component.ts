import { Component } from '@angular/core';
import { ArticlesService } from './service/articles.service';
import { Article } from '../../../Models/Blog/Article';
import { MatSnackBar} from '@angular/material';
import { Router} from '@angular/router';

@Component({   
    templateUrl:'./article-add.component.html'

})
export class ArticelAddComponent{

    articleModel:Article = new Article();

    constructor(
        public articleService:ArticlesService, 
        public snackBar:MatSnackBar, 
        public router:Router
    )
    {

    }


    saveArticle(){

        debugger;
        //console.log('hitting');        
        this.articleService.addArticle(this.articleModel)
            .then( ref=> {

                this.snackBar.open(" Article Saved ", null, {
                    duration: 2500,
                  });
                  this.router.navigate(["/articles"]);
             })
            .catch( err=>{ 

                this.snackBar.open("Error in Saving", null, {
                    duration: 2000,
                  });
            })        

    }

}