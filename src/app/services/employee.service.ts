import { Injectable } from '@angular/core';

import { employee } from '../pages/common/constants';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    employees = employee;
 
    constructor(private util: UtilService) {}
    
    getAllEmployees(){
      return this.employees;
    }
    
    getEmployeeById(id: number){
      return this.employees.find(x => x['id'] == id);
    }

    setEmployeeById({ id, record }: { id: number; record: any; }) {
        this.employees[this.util.getEmployeeIndex(id, this.employees)] = record;
    }

    addEmployee(record: any) {
      this.employees.push(record);
    }

    deleteEmployee(id: number) {
      this.employees.splice(id, 1)
    }
}
