import { Component, OnInit } from '@angular/core';

import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  toExpand = false;

  constructor(private shared: SharedService) { }

  ngOnInit() {

    this.shared.expansion.subscribe(toToggle => {
      this.toExpand = toToggle;
    });

  }

}
