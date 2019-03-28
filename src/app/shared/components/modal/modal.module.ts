import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@modules/shared.module';

import { ModalComponent } from '@components/modal/modal.component';
import { ModalService } from '@components/modal/shared/modal.service';
import { ModalOpenDirective } from '@components/modal/shared/modal-open.directive';
import { ModalCloseDirective } from '@components/modal/shared/modal-close.directive';
import { ModalStateDirective } from '@components/modal/shared/modal-state.directive';

@NgModule({
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    ModalOpenDirective,
    ModalCloseDirective,
    ModalStateDirective,
    ModalComponent
  ],
  declarations: [
    ModalOpenDirective,
    ModalCloseDirective,
    ModalStateDirective,
    ModalComponent
  ],
  providers: [
    ModalService
  ]
})

export class ModalModule {}
