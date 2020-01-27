import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [LayoutComponent,
    DashboardComponent,
    SidemenuComponent,
    HeaderComponent,
    AddEmployeeComponent,
    EditEmployeeComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: []
})
export class LayoutModule {}