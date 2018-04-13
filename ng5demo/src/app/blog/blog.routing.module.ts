import {Routes, RouterModule} from '@angular/router'
import { NgModule } from '@angular/core'
import { NgModel } from '@angular/forms/src/directives/ng_model';
import { listener } from '@angular/core/src/render3/instructions';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesModule } from './articles-list/articles.module';

const BlogRoutes:Routes = [

    { path:'articles-list', component: ArticlesListComponent },     
    
]

@NgModule({
    imports:[ArticlesModule],   
    exports:[RouterModule]
})
export class BlogRoutesModule{

}