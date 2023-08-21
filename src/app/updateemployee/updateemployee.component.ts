import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-updateemployee',
  templateUrl: './updateemployee.component.html',
  styleUrls: ['./updateemployee.component.css']
})
export class UpdateemployeeComponent implements OnInit{

  
  empId:number;
employee:Employee=new Employee();

constructor(private employeeService:EmployeeServiceService,private route:ActivatedRoute,
  private router: Router){  }
 
  ngOnInit(): void {
    this.empId = this.route.snapshot.params['id'];
    console.log(this.empId)

    this.employeeService.getById(this.empId).subscribe(data => {
      this.employee = data;
    });
  }
update(){
  this.employeeService.createEmployee(this.employee).subscribe(data => {
    this.goToEmployeeList();
  });
 }

 goToEmployeeList(){
   this.router.navigate(['/listemployee']);
 }
}
  //createEmployee





