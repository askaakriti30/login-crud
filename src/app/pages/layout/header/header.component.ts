import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ToastService } from '../../../services/toast.service';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit { 
  
  public navIcon = 'assets/images/nav-stack.svg';
  public searchIcon = 'assets/images/search.svg';
  public userIcon = 'assets/images/user.svg';
  public profileIcon = 'assets/images/wheel.svg';
  public logoutIcon = 'assets/images/logout.svg';
  public userImage = 'assets/images/user.png';

  open = false;
  toToggle = false;

  constructor(public toastService: ToastService, private router: Router, private shared: SharedService) { }

  ngOnInit() {
  }

  toggleSidebar(message: boolean) {
    this.shared.togglesidebar(message);
  }

  logout() {
    this.toastService.show('Logged Out Successfully', {
      classname: 'bg-success text-light',
      delay: 2000 ,
      autohide: true
    });
    this.router.navigate(['/login']);
  }

}
