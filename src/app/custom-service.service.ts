import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomServiceService {

  private items: string[] = [];
  item: string | undefined;

  constructor() { }

  servicePushItem(item: string) {
    this.items.push(item);
    item = '';
  }

  servicePopItem() {
    if(this.items.length > 0) {
      this.items.pop();
    }
  }

  serviceGetItems(): string[] {
    return this.items;
  }

}
