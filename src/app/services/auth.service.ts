import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const USER_DATA = 'user_data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(data: object) {
    if(data) {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
    }
  }

  logout() {
    localStorage.removeItem(USER_DATA);
  }

  isAuthenticated() {
    if(localStorage.getItem(USER_DATA)) {
      return true;
    }

    return false;
  }
}