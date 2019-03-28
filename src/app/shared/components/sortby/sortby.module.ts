import { NgModule } from '@angular/core';
import { SharedModule } from '@modules/shared.module';
import { SortbyComponent } from '@components/sortby/sortby.component';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    SortbyComponent
  ],
  declarations: [
    SortbyComponent
  ]
})

export class SortbyModule {}
