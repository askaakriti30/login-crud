import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';

import { LoadingService } from '../../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoaderComponent implements OnInit {

  isLoading = false;

  constructor(private changeDEtectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    LoadingService.onChange.subscribe(isLoading =>
    {
      this.isLoading = isLoading;
      this.changeDEtectorRef.detectChanges();
    });
  }
}
