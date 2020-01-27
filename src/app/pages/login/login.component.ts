import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastService } from '../../services/toast.service';
import { AuthService } from '../../services/auth.service';
import { LoadingService } from '../../services/loader.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public imgURL = 'assets/images/small-logo.png';
  loginForm: FormGroup;
  submitted = false;

  constructor(public toastService: ToastService, private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  ngOnInit() {
    //Loader
    LoadingService.show();
    LoadingService.hide();

    //Logout
    this.auth.logout();

    //Form Validators - Reactive Form
    this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    LoadingService.show();
    this.submitted = true;

    if (this.loginForm.invalid) {
      this.toastService.show('Record cant be updated. Please check Errors and Try Again.', {
        classname: 'bg-danger text-light',
        delay: 2000 ,
        autohide: true
      });
      LoadingService.hide();
      return;
    }

    this.auth.login(this.loginForm.value);
    this.toastService.show('Logged In Successfully', {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true
    });
    this.router.navigate(['/']);
    LoadingService.hide();
  }

}
