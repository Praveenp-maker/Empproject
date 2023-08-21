import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';

import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent {
  employee: Employee=new Employee();

  constructor(private employeeservice: EmployeeServiceService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    console.log("came to save emp");
   this.employeeservice.createEmployee(this.employee).subscribe(data => {
     this.goToEmployeeList();
   });
  }

  goToEmployeeList(){
    this.router.navigate(['/listemployee']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
}
}