import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QnaListComponent } from './qna-list/qna-list.component';
import { QnaAddComponent } from './qna-add/qna-add.component';
import { QnaUpdateComponent } from './qna-update/qna-update.component';
import { QAndARoutingModule } from './qna.routing.module';
import { QAndAComponent } from './qna.component'
@NgModule({
  imports: [
    CommonModule, QAndARoutingModule
  ],
  declarations: [QAndAComponent, QnaListComponent, QnaAddComponent, QnaUpdateComponent]
})
export class QaModule { }
