import { Injectable, Optional } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Iitem } from '@interfaces/item.interface';

@Injectable()

export class DataService {
  selectedItems: Iitem[] = [];

  private states = new BehaviorSubject<Iitem[]>(null);
  public states$: Observable<Iitem[]> = this.states.asObservable();

  constructor() {}

  getStoredItems() {
    if (window.localStorage) {
      this.selectedItems = JSON.parse(localStorage.getItem('wpUserItems'));
    }
    return this.selectedItems;
  }

  addRemoveItem(item): void {
    if (this.selectedItems.indexOf(item) > -1) {
      this.selectedItems.splice(this.selectedItems.indexOf(item), 1);
    } else {
      console.log('addItem');
      this.selectedItems.push(item);
    }

    localStorage.setItem('wpUserItems', JSON.stringify(this.selectedItems));

    this.states.next(this.selectedItems);
  }

  clearItems(): void {
    localStorage.removeItem('wpUserItems');
  }

}
