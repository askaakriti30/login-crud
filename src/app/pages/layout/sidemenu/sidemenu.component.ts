import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  public logoURL = 'assets/images/logo.png';
  public smallLogoURL = 'assets/images/small-logo.png';
  toExpand = false;

  constructor(private shared: SharedService) { }

  ngOnInit() {

    this.shared.expansion.subscribe(toToggle => {
      this.toExpand = toToggle;
    });
  }

}
