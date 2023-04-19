import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  
  public empData:any=[];
  public searchData
  constructor(private employeeService:EmployeeService, private router:Router) {
    this.searchData = {
      name:null
    }
   }

  ngOnInit() {
    
  }

  public flag = false;
  check(){
    this.flag = true
    this.employeeService.searchByName(this.searchData)
    .subscribe(data=>{
      console.log(data);
      this.empData = data;
      console.log(this.empData);
    })
  }

  editEmployee(id){
    this.router.navigate(['/employeeEdit',id]);
  }

  deleteEmployee(id){
    this.employeeService.deleteRecord(id)
    .subscribe(data=>{
      console.log(data);
      this.employeeService.searchByName(this.searchData)
      .subscribe(data=>{
        this.empData = data;
      });
    });
    alert('Deleted Successfully.....');
  }

}
