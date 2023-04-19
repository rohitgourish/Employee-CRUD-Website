import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { AddEmployeesComponent } from './add-employees/add-employees.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

import { LoginComponent } from './login/login.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    AddEmployeesComponent,
    PageNotFoundComponent,
    EditEmployeeComponent,
    LoginComponent,
    SearchEmployeeComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }