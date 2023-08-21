import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent {
  empId:number;
employee:Employee=new Employee();
constructor(private employeeService:EmployeeServiceService,private route:ActivatedRoute,
  private router: Router){

}
ngOnInit():void{
  this.empId = this.route.snapshot.params['id'];
  console.log(this.empId)

  this.employeeService.getById(this.empId).subscribe(data => {
    this.employee = data;
  });

}
}
