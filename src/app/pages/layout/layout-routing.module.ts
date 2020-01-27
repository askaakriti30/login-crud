import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

import {DashboardComponent} from "../dashboard/dashboard.component";
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';

const routes: Routes = [
  {
      path: '',
      component: LayoutComponent,
      children: [
        { path: '', component: DashboardComponent, pathMatch: 'full' },
        { path: 'dashboard', component: DashboardComponent },
        { path: 'add-employee', component: AddEmployeeComponent },
        { path: 'edit-employee/:id', component: EditEmployeeComponent },
      ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }