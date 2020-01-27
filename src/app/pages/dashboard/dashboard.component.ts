import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';

import { ToastService } from '../../services/toast.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  public deleteIcon = 'assets/images/trash.svg';
  public addIcon = 'assets/images/add.svg';
  closeResult: string;
  modalOptions:NgbModalOptions;
  allEmployees = [];

  constructor(public toastService: ToastService, private modalService: NgbModal, private employees: EmployeeService) { 
    this.modalOptions = {
      backdrop:'static',
      backdropClass:'customBackdrop'
    }
  }

  ngOnInit() { 
    this.allEmployees = this.employees.getAllEmployees();
  }

  open(content: string, employeeId: number) {
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      if(result == 'delete') {
        this.employees.deleteEmployee(employeeId);
        this.toastService.show('Record has been deleted', {
          classname: 'bg-success text-light',
          delay: 2000 ,
          autohide: true
        });
      }
    });
  }

}
