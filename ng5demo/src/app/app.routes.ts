import {Routes } from '@angular/router';
import { Component } from '@angular/core/src/metadata/directives';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';


export const AppRoutes: Routes  = [
    
    {path:' ' , component: DashboardComponent },
    {path:'blog' , component: BlogComponent }        

]; 