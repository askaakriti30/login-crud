import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({ providedIn: 'root' })
export class SharedService {

  private expand = new BehaviorSubject<boolean>(false);
  expansion = this.expand.asObservable();

  constructor() { }

  togglesidebar(toexpand: boolean) {
    this.expand.next(toexpand)
  }
  
}
