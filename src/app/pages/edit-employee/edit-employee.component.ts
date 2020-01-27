import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastService } from '../../services/toast.service';
import { EmployeeService } from '../../services/employee.service';
import { UtilService } from '../../services/util.service';
import { LoadingService } from '../../services/loader.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  allEmployees = [];
  id: number;
  editEmployee: FormGroup;
  submitted = false;
  employee = {};

  constructor(public toastService: ToastService, private router: Router, private route: ActivatedRoute, private formBuilder: FormBuilder, private employees: EmployeeService, private util: UtilService) { }

  ngOnInit() {
    this.editEmployee = this.formBuilder.group({
      employeeId: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      name: ['', Validators.required],
      status: ['', Validators.required],
      salary: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      joiningDate: ['', Validators.required],
    });

    this.route.params.subscribe(params => {
      this.id = parseInt(params.id);
      this.employee = this.employees.getEmployeeById(params.id);
      if(this.employee) {
        let date = new Date(this.employee['joiningDate'] * 1000);
        let dateFormat = date.getFullYear()+"-"+("0" + (date.getMonth() + 1)).slice(-2)+"-"+("0" + date.getDate()).slice(-2);
        this.editEmployee.get("employeeId").setValue(this.employee['employeeId']);
        this.editEmployee.get("name").setValue(this.employee['name']);
        this.editEmployee.get("status").setValue(this.employee['status']);
        this.editEmployee.get("salary").setValue(this.employee['salary']);
        this.editEmployee.get("joiningDate").setValue(dateFormat);
      } else {
        this.router.navigate(['/']);
      }
    });

    this.allEmployees = this.employees.getAllEmployees();
  }

  get f() { 
    return this.editEmployee.controls; 
  }

  onSubmit() {
    LoadingService.show();
    this.submitted = true;

    if (this.editEmployee.invalid) {
      this.toastService.show('Record cant be updated', {
        classname: 'bg-danger text-light',
        delay: 2000 ,
        autohide: true
      });
      LoadingService.hide();
      return;
    }

    let updateRecord = this.editEmployee.value;
    updateRecord.joiningDate = this.util.epochConversion(updateRecord.joiningDate); 
    updateRecord.id = this.id;
    this.employees.setEmployeeById({ id: this.id, record: updateRecord });
    this.toastService.show('Record has been updated', {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true
    });
    this.router.navigate(['/']);
    LoadingService.hide();
  }

}
