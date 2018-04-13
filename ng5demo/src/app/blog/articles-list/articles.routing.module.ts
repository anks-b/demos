import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
import { ArticlesComponent } from './articles.component';
import { ArticelAddComponent } from './article-add.component'
import { ArticelEditComponent } from './article-edit.component'
import { ArticlesListComponent } from './articles-list.component'





// const ArticleRoutes1:Routes = [
//     { path:'articles-list', component: ArticlesListComponent, children:[
//                                                                     {path:'add' , component:ArticelAddComponent },
//                                                                     {path:'edit/:id' , component: ArticelEditComponent }
//                                                                 ] },    
//     { path:'blog', redirectTo:'/articles-list' },    
// ];


const ArticleRoutes: Routes = [
    {
      path: 'articles',
      component: ArticlesComponent,
      children: [

            {
                path: '',
                component: ArticlesListComponent
            },        
            {
                path: 'add',
                component: ArticelAddComponent
            },
            {
              path: 'edit/:id',
              component: ArticelEditComponent
            },                              
      ]
    },
    { path:'blog', redirectTo:'/articles' },  
  ];

@NgModule({
    imports:[ RouterModule.forChild(ArticleRoutes) ],
    exports:[RouterModule]
})
export class ArticleRoutesModule{

}