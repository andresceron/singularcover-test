
import {filter} from 'rxjs/operators';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';

import { NavigationStart, Router } from '@angular/router';

import { Subject ,  Subscription } from 'rxjs';

import { ModalService } from '@components/modal/shared/modal.service';
import { IModal } from '@components/modal/shared/modal.interface';

@Component({
  selector: 'sc-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ModalComponent implements OnInit, OnDestroy {
  @ViewChild('overlay') overlay: ElementRef;
  @Input() modalId: string;
  @Input() size: 'sm';
  @Input() position = 'top';
  @Output() closed: EventEmitter<any> = new EventEmitter<any>();

  public isOpen = false;
  public currentTemplate: string;

  private statesSubscription: Subscription;

  constructor(
    private cd: ChangeDetectorRef,
    private modalService: ModalService,
    private router: Router
  ) {}

  @HostListener('document:click', ['$event'])
  documentClick(e: MouseEvent) {

    // If the clicked element is the modal overlay, close the modal
    if (this.overlay.nativeElement === e.target) {
      this.modalService.close(this.modalId);
    }
  }

  ngOnInit() {

    this.statesSubscription = this.modalService.states$.pipe(
      filter((modal: IModal) => !!modal))
      .subscribe(
      (modal: any) => {

        if (modal.id === this.modalId) {

          if (modal.action === 'open') {
            this.isOpen = true;
          } else {
            this.isOpen = false;
            this.closed.emit(this.modalId);
          }

          this.currentTemplate = modal.template;

          this.cd.markForCheck();
        }
      }
    );

    this.router.events.pipe(
      filter(event => event instanceof NavigationStart))
      .subscribe(() => {
        this.modalService.close(this.modalId);
      }
    );
  }

  ngOnDestroy() {
    this.statesSubscription.unsubscribe();
  }
}

/* Creates a modal component consisting of an overlay and a content box.
 *
 * Example usages:
 *
 * <modal modalId="settings" position="center" size="fluid">
 *  <h1>Hello world</h1>
 * </modal>
 *
 * <!-- To toggle the modal -->
 * <button modalOpen modalId="settings">Open modal</button>
 *
 * <modal #modal modalId="settings" position="center" size="fluid">
 *  <div *ngIf="modal.currentTemplate === 'world'">
 *    <h1>Hello world</h1>
 *  </div>
 *  <div *ngIf="modal.currentTemplate === 'universe'">
 *    <h1>Hello world</h1>
 *  </div>
 * </modal>
 *
 * <!-- To toggle modal with "Hello world" message -->
 * <button modalOpen modalId="settings" modalTemplate="world">Open modal</button>
 *
 * <!-- To toggle modal with "Hello universe" message -->
 * <button modalOpen modalId="settings" modalTemplate="universe">Open modal</button>
 *
 * <!-- To close modal -->
 * <button modalClose modalId="settings">Close modal</button>
 *
 * Available inputs:
 * @param {String} modalId [a unique modal id used to identify the correct modal instance]
 * @param {String} size [the size of the content box, can be fluid|full|xs|sm|md|lg|xl]
 * @param {String} position [the position of the content box, can be center|left|right|top|bottom]
 */
