import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
 
    constructor() {}

    getEmployeeIndex(id: number, array: any) {
      return array.findIndex(x => x['id'] == id);
    }

    epochConversion(date: Date) {
      let customDate = new Date(date);
      return customDate.getTime()/1000.0;
    }
}
