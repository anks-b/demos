import { Component, OnInit } from '@angular/core';
import { EmployeesService } from './employees.service'

@Component({
  selector: 'employee-list',
  template: `<simple-grid [options]="gridOptions"></simple-grid>`,
})
export class EmployeeListComponent implements OnInit {
   
  gridOptions:any = {};

  constructor(private employeeService:EmployeesService){

  }
  
  ngOnInit(): void {

    this.gridOptions.data =  this.employeeService.getEmployees();            

  }



  }
