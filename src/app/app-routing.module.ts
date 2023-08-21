import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { LoginComponent } from './login/login.component';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"listemployee",component:ListemployeeComponent},
  {path:"addemployee",component:AddemployeeComponent},
  {path:"updateemployee/:id",component:UpdateemployeeComponent},
  {path:"viewemployee/:id",component:ViewemployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
