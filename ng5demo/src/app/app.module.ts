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

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { environment } from '../environments/environment'


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

    
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features



    ArticlesModule,
    QaModule,               
    AppRouteModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
