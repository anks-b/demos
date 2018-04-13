import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutesModule } from './articles.routing.module';
import { ArticlesListComponent } from './articles-list.component';
import { ArticelAddComponent } from './article-add.component';
import { ArticelEditComponent } from './article-edit.component';
import { ArticlesComponent } from './articles.component';
import { MatTableModule, MatCardModule, MatButtonModule} from '@angular/material'
import { FormsModule } from '@angular/forms'
import { EditorModule} from '@tinymce/tinymce-angular'


@NgModule({
    imports:[ CommonModule, ArticleRoutesModule, MatTableModule, MatCardModule, FormsModule, EditorModule, MatButtonModule],   
    declarations:[ ArticlesComponent, ArticlesListComponent, ArticelAddComponent, ArticelEditComponent ],
    
})
export class ArticlesModule{

}