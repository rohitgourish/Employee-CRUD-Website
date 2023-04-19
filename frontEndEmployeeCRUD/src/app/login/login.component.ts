import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginData:any;
  public errorUsernameMessage:string;
  public errorPasswordMessage:string;
 
  constructor(private employeeService:EmployeeService,private router:Router) { 
    this.loginData = {
      username:null,
      password:null
    } 
  }
  ngOnInit(): void {
    
  }
 
  login(){
    this.errorUsernameMessage = '';
    this.errorPasswordMessage = '';
    this.employeeService.login(this.loginData)
    .subscribe(data=>{
      console.log(data);
      if(data.success==400){
        this.errorUsernameMessage = data.message;
      } else if( data.success==200){
        this.router.navigate(['/employeeList']);
      } else if(data.success==404){
        this.errorPasswordMessage = data.message;
      }
    });
  }

  registerPage(){
    this.router.navigate(['/register']);
  }
}