import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';

import { ClientStorage } from '@services/client-storage.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'sc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private statesSubscription: Subscription;

  constructor(
    private cs: ClientStorage,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}

