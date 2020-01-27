import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastService } from '../../services/toast.service';
import { EmployeeService } from '../../services/employee.service';
import { UtilService } from '../../services/util.service';
import { LoadingService } from '../../services/loader.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  addEmployee: FormGroup;
  submitted = false;
  allEmployees = [];

  constructor(public toastService: ToastService, private router: Router, private formBuilder: FormBuilder, private employees: EmployeeService, private util: UtilService) { }

  ngOnInit() {

    this.addEmployee = this.formBuilder.group({
      employeeId: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      name: ['', Validators.required],
      status: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      joiningDate: ['', Validators.required],
    });


    this.allEmployees = this.employees.getAllEmployees();
  }

  getToday() {
    return new Date().toISOString().split('T')[0]
 }
  
  get f() { 
    return this.addEmployee.controls; 
  }

  onSubmit() {
    LoadingService.show();
    this.submitted = true;

    if (this.addEmployee.invalid) {
      this.toastService.show('Record cant be updated. Please check Errors and Try Again.', {
        classname: 'bg-danger text-light',
        delay: 2000 ,
        autohide: true
      });
      LoadingService.hide();
      return;
    }

    let newEmployee = this.addEmployee.value;
    newEmployee.joiningDate = this.util.epochConversion(newEmployee.joiningDate); 
    newEmployee.id = this.allEmployees.length;
    this.employees.addEmployee(newEmployee);
    this.toastService.show('Record has been updated', {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true
    });
    this.router.navigate(['/']);
    LoadingService.hide();
  }

}
