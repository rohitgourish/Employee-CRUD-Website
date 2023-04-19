import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  //checkLogin = false;
  constructor(private http:HttpClient) { }
  
  getAllEmployeeDetails():Observable<IEmployee[]>{
    let url = `http://localhost:4000/getAllDetails`;
    let result = this.http.get<IEmployee[]>(url);
    return result;
  }
  
  insertEmployee(data):Observable<IEmployee>{
    let url = `http://localhost:4000/insert`;
    let result = this.http.post<IEmployee>(url,data);
    return result;
  }

  searchByName(name):Observable<any>{
    console.log(name);
    let url = `http://localhost:4000/getByName`;
    let result = this.http.post<IEmployee>(url,name);
    return result;
  }

  getById(id):Observable<IEmployee>{
    let url = `http://localhost:4000/get/${id}`;
    let result = this.http.get<IEmployee>(url);
    return result;
  }
  
  updateDetails(data):Observable<any>{
    let url = `http://localhost:4000/update`;
    let result = this.http.put<IEmployee>(url,data);
    return result;
  }
  
  deleteRecord(id):Observable<any>{
    let url = `http://localhost:4000/delete/${id}`;
    let result = this.http.delete<any>(url);
    return result;
  }
  
  login(data):Observable<any>{
    let url = `http://localhost:4000/login`;
    let result = this.http.post<any>(url,data);
    return result;
  }

  register(data):Observable<any>{
    let url = `http://localhost:4000/register`;
    let result = this.http.post<any>(url,data);
    return result;
  }
  
}