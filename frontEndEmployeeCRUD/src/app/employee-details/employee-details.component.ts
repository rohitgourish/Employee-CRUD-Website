import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {
  
  public searchData;
  public errorMessage ='';
  empData:IEmployee[] = [];
  constructor(private employeeService:EmployeeService, private router:Router) { 
    this.searchData ={
      name:null
    }
  }
  
  ngOnInit(): void {
    this.employeeService.getAllEmployeeDetails()
    .subscribe(data =>{
        this.empData = data;
    });
  }

  check(){
    this.errorMessage=''
    this.employeeService.searchByName(this.searchData)
    .subscribe(data=>{
      if(data.success==0){
        this.errorMessage = data.message;
      }else{
        console.log(data);
        this.empData = data;
        console.log(this.empData);
  
      }
   });
  }

  editEmployee(id){
    this.router.navigate(['/employeeEdit',id]);
  }

  deleteEmployee(id){
    this.employeeService.deleteRecord(id)
    .subscribe(data=>{
      console.log(data);
      this.employeeService.getAllEmployeeDetails()
      .subscribe(data=>{
        this.empData = data;
      });
    });
    alert('Deleted Successfully.....');
  }

}