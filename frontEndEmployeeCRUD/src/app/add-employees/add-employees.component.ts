import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  public empData:IEmployee;
  topics = ["Angular","React","Node"];
  
  constructor(private employeeService:EmployeeService, private router:Router) { 
    this.empData = {
      id:null,
      name:null,
      email:null,
      subject:null,
      gender:null
    }
  }
  ngOnInit(): void {
  }
  addEmployee(){
    console.log(this.empData);
    this.employeeService.insertEmployee(this.empData)
    .subscribe(data=>{
      console.log(data);
    });
    alert('Record Inserted...');
    this.router.navigate(['/employeeDetails']);
  }
}