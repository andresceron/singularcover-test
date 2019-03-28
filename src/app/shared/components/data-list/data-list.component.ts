import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ContentChild,
  TemplateRef,
  Output,
  EventEmitter
   } from '@angular/core';

import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'sc-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DataListComponent {
  private _items: any[] = [];

  @Input() noResultsText = 'No results found';
  @Input() virtualScrollHeight = 560;
  @Input() hasPrice = true;
  @Input() listToModify: any[];
  @Output() itemEvent = new EventEmitter();

  @Input() set items(items) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  @ContentChild('titleRef') titleRef: TemplateRef<NgTemplateOutlet>;
  @ContentChild('tagRef') tagRef: TemplateRef<NgTemplateOutlet>;
  @ContentChild('subTagRef') subTagRef: TemplateRef<NgTemplateOutlet>;
  @ContentChild('priceRef') priceRef: TemplateRef<NgTemplateOutlet>;
  @ContentChild('favBtnRef') favBtnRef: TemplateRef<NgTemplateOutlet>;

  constructor() {
  }

  clickedFavItem(listToModify, item, idx) {
    console.log(idx);
    this.itemEvent.emit({listToModify, item, idx});
  }

}
