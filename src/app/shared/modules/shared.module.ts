import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppBootstrapModule } from '@shared/bootstrap/app.bootstrap.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ScrollingModule } from '@angular/cdk/scrolling';
import { PlatformModule } from '@angular/cdk/platform';
import { VirtualScrollerModule } from 'ngx-virtual-scroller';

@NgModule({
  imports: [
    CommonModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    PlatformModule,
    VirtualScrollerModule
  ],
  exports: [
    CommonModule,
    AppBootstrapModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    PlatformModule,
    VirtualScrollerModule
  ],
  declarations: [
  ]
})

export class SharedModule {}
