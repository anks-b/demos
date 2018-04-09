import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { TopNavComponent } from './dashboard/topnav/top-nav.component';
import { RouterOutlet, RouterModule } from '@angular/router';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlogComponent } from './blog/blog.component'; 

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,    
    RouterOutlet, DashboardComponent, BlogComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,MatToolbarModule,RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
