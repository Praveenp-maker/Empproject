import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
 

  
  private baseURL = "http://localhost:8080/employee";


  constructor(private httpClient: HttpClient) { }
  
  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseURL + '/list'}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    console.log("came to create emp");
    return this.httpClient.post(`${this.baseURL + '/saveInsert'}`, employee);
  }  
 
  getById(empId:number):Observable<Employee>{
    console.log("getbyid method")
    return this.httpClient.get<Employee>(`${this.baseURL + '/listById/'+empId}`);
  }
 
  deleteEmployee(empId:number):Observable<Employee>{
    console.log("del service click")
    return this.httpClient.delete<Employee>(`${this.baseURL+ '/delete/'+empId}`);
  }

  updateEmployee(empId:number,employee:Employee ):Observable<Employee>{
return this.httpClient.put<Employee>(`${this.baseURL+'update/'+empId}`,employee);
  }
  // http://localhost:8080/employee/listById/4
}
