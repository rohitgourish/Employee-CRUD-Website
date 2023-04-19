import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { LoginComponent } from './login/login.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'', redirectTo:'/login', pathMatch:'full'},
  { path: 'login', component:LoginComponent},
  { path:'searchEmployee', component:SearchEmployeeComponent},
  { path:'register', component:RegisterComponent},
  { path:'employeeList', component:EmployeeListComponent},
  { path:'employeeDetails', component: EmployeeDetailsComponent},
  { path: 'addEmployee', component: AddEmployeesComponent},
  { path: 'employeeEdit/:id', component:EditEmployeeComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }