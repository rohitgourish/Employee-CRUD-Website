import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerData:any;
  
  constructor(private employeeService:EmployeeService, private router:Router) { 
    this.registerData = {
      username:null,
      password:null
    }
  }

  ngOnInit() {
  }

  register(){
    this.employeeService.register(this.registerData)
    .subscribe(data=>{
      console.log(data);
    });
    alert("Registered successfully!!!");
    this.router.navigate(['/login']);
  }

}
