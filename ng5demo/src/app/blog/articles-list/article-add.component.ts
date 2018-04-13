import { Component } from '@angular/core';

@Component({   
    templateUrl:'./article-add.component.html'

})
export class ArticelAddComponent{

    articleModel:any={};

    constructor(){

    }


    saveArticle(){
        console.log('hitting');
        debugger;

    }

}