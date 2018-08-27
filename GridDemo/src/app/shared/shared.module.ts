import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { FormsModule } from '@angular/forms';
import { SimpleGridComponent } from './simple-grid.Component'

@NgModule({
  declarations: [   
    SimpleGridComponent
  ],
  imports:[
      CommonModule,
      FormsModule
  ],
  exports:[
      SimpleGridComponent
  ]
})
export class SharedModule {


 }
