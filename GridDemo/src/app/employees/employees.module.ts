import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { EmployeeListComponent } from './employee-list.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeesService} from './employees.service'
@NgModule({
  declarations:[
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers:[
    EmployeesService
  ],
  exports:[
    EmployeeListComponent
  ]
  
  
})
export class EmployeesModule { }  
