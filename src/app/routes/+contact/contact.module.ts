import { NgModule } from '@angular/core';

import { ComponentsModule } from '@modules/components.module';
import { SharedModule } from '@modules/shared.module';

import { ContactRouterModule } from './contact-router.module';
import { RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';

@NgModule({
  imports: [
    RouterModule,
    ComponentsModule,
    SharedModule,
    ContactRouterModule
  ],
  exports: [ContactRouterModule],
  declarations: [ContactComponent]
})

export class ContactModule { }
