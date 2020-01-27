import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from './auth.service';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
 
  constructor(public auth: AuthService, private router: Router, public toastService: ToastService) {}
 
  canActivate(): boolean {
    if(this.auth.isAuthenticated()) {
      return true;
    } else {
      this.toastService.show('You are not allowed to access this URL. Please login first.', {
        classname: 'bg-danger text-light',
        delay: 2000 ,
        autohide: true
      });
      this.router.navigate(['/login']);
      return false;
    }
  }
}
