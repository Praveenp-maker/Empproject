import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListemployeeComponent } from './listemployee/listemployee.component';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { FormsModule } from '@angular/forms';
import { UpdateemployeeComponent } from './updateemployee/updateemployee.component';
import { ViewemployeeComponent } from './viewemployee/viewemployee.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListemployeeComponent,
    AddemployeeComponent,
    UpdateemployeeComponent,
    ViewemployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
