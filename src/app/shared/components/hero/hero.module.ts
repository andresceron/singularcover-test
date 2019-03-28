import { NgModule } from '@angular/core';
import { SharedModule } from '@modules/shared.module';
import { HeroComponent } from '@components/hero/hero.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  exports: [
    HeroComponent
  ],
  declarations: [
    HeroComponent
  ]
})

export class HeroModule {}
