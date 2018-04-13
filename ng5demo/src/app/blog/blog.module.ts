import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router'
import { BlogRoutesModule } from './blog.routing.module';
import { ArticlesModule } from './articles-list/articles.module';

@NgModule({
  imports: [
    CommonModule,ArticlesModule
  ],
  declarations: [],  
})
export class BlogModule { }
