import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../employee';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  public id:number;
  empData:any;
  topics = ["Angular","React","Node"];
  
  constructor(private activatedRoute:ActivatedRoute,private employeeService:EmployeeService, private router:Router) {
    this.empData = {
      id:null,
      name:null,
      email:null,
      subject:null,
      gender:null
    }
   }
  
   ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.id = id;
    });
    this.employeeService.getById(this.id)
    .subscribe(data=>{
      this.empData = data;
      console.log(this.empData);
    })
    
  }
  
  editEmployee(){
    this.employeeService.updateDetails(this.empData)
    .subscribe(data=>{
      console.log(data);
    });
    alert("Record Updated");
    this.router.navigate(['/employeeDetails']);
  }
}