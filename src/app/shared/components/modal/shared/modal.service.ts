import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IModal } from '@components/modal/shared/modal.interface';

@Injectable()

export class ModalService {

  private states = new BehaviorSubject<IModal>(null);

  public states$ = this.states.asObservable();

  constructor() {}

  open(id: string, template?: string): void {
    const args: IModal = {
      isOpen: true,
      id: id,
      template: template,
      action: 'open'
    };

    this.states.next(args);
  }

  close(id: string): void {

    const args: IModal = {
      isOpen: false,
      id: id,
      action: 'close'
    };

    this.states.next(args);
  }
}
