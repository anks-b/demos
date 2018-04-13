import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRouteModule } from './app.routes';
import { TopNavComponent } from './dashboard/topnav/top-nav.component';
import { FlexLayoutModule } from '@angular/flex-layout';

//import {MatButtonModule} from '@angular/material/button';
//import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTableModule, MatToolbarModule, MatButtonModule, MatCardModule, MatIconModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
// import { BlogComponent } from './blog/blog.component'; 
import { EditorModule  } from '@tinymce/tinymce-angular';

import { ArticlesModule } from './blog/articles-list/articles.module'
import { QaModule } from './blog/qa/qa.module';


@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,    
    DashboardComponent
  ],
  imports: [
    BrowserModule,

    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,

    FlexLayoutModule,
    EditorModule,
    ArticlesModule,
    QaModule,               
    AppRouteModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
