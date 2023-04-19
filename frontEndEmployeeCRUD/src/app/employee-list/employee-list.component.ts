import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  empData:IEmployee[] = [];
  constructor(private employeeService:EmployeeService) { }
  ngOnInit(): void {
    this.employeeService.getAllEmployeeDetails()
    .subscribe(data=>{
      this.empData = data;
    })
  }
}