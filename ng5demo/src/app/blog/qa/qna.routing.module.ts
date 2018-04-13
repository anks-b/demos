import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { QAndAComponent } from './qna.component';
import { QnaListComponent } from './qna-list/qna-list.component';

const qaRoutes:Routes = [
    { path:'qas' , component: QAndAComponent , children: [ { path:'', component:QnaListComponent }  ] }
]


@NgModule({

    imports:[RouterModule.forChild(qaRoutes)],
    exports:[RouterModule]

})
export class QAndARoutingModule{

}