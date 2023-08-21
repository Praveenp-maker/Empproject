import { Component, OnDestroy, OnInit } from '@angular/core';
import { Data, Router } from '@angular/router';

import { Employee } from '../employee'
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-listemployee',
  templateUrl: './listemployee.component.html',
  styleUrls: ['./listemployee.component.css']
})

export class ListemployeeComponent implements OnInit {
  employees: Employee[];


//  employees = [
//     { id: "1",name:"ramesh",role:"dev",age:"3",experience:"4",native:"salem" },
//     { id: "2",name:"kamalesh",role:"dev",age:"3",experience:"4",native:"salem" },
//     { id: "3",name:"ramesh",role:"dev",age:"3",experience:"4",native:"salem" },
//     { id: "4",name:"ramesh",role:"dev",age:"3",experience:"4",native:"salem" },
//     { id: "5",name:"ramesh",role:"dev",age:"3",experience:"4",native:"salem" }
  
//   ];

  constructor(private employeeservice:EmployeeServiceService, private router: Router) { }
  ngOnInit(): void {
    this.getEmp();
  }
  private getEmp() {
    this.employeeservice.getEmployeesList().subscribe(data=>{
      this.employees=data;
     
    }
      );
  }

update(empId:number){
 
  this.router.navigate(['updateemployee',empId])

}
 deleteEmployee(empId:number){
  console.log("del click")
  this.employeeservice.deleteEmployee(empId).subscribe( data => {
    console.log(data);
    this.getEmp();
  })
}
viewEmployee(empId:number){
  this.router.navigate(['viewemployee',empId])
}


}
