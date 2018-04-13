import {Routes, RouterModule } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { NgModule } from '@angular/core';
import { ArticlesComponent } from './blog/articles-list/articles.component';
import { ArticelAddComponent } from './blog/articles-list/article-add.component';
import { ArticelEditComponent } from './blog/articles-list/article-edit.component';




export const AppRoutes: Routes  = [    
    {path:'dashboard' , component: DashboardComponent },                       
    {path:'' , redirectTo:'/dashboard', pathMatch:"full" },
]; 

@NgModule({
    imports: [ RouterModule.forRoot(AppRoutes, { enableTracing: true }) ],   
    exports: [ RouterModule ] 
})
export class AppRouteModule{

}