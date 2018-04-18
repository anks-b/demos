import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutesModule } from './articles.routing.module';
import { ArticlesListComponent } from './articles-list.component';
import { ArticelAddComponent } from './article-add.component';
import { ArticelEditComponent } from './article-edit.component';
import { ArticlesComponent } from './articles.component';
import { MatTableModule, MatCardModule, MatButtonModule, MatInputModule, MatSnackBarModule} from '@angular/material'
import { FormsModule } from '@angular/forms'
import { EditorModule} from '@tinymce/tinymce-angular'
import { ArticlesService } from './service/articles.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    imports:[ CommonModule, ArticleRoutesModule, 

        MatTableModule, MatCardModule, MatInputModule, MatSnackBarModule, MatButtonModule,

        FormsModule, EditorModule, BrowserAnimationsModule],   
    declarations:[ ArticlesComponent, ArticlesListComponent, ArticelAddComponent, ArticelEditComponent ],
    providers:[ArticlesService]
    
})
export class ArticlesModule{

}