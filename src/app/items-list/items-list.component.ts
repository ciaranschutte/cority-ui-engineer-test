import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { Item } from '../shared/item.model';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css'],
})

export class ItemsListComponent implements OnInit {
  today: number = Date.now();
  selectedItems: number[];

  ngOnInit() {
    this.selectedItems = [];
  }

  public selectItem(item) {
    const id = item.id;
    const index = this.selectedItems.indexOf(id);
    if(index !== -1) {
      this.selectedItems.splice(index, 1);
    } else {
      this.selectedItems.push(id);
    }
  }

  public isSelected(item) {
    const id = item.id;
    return this.selectedItems.indexOf(id) === -1 ? false : true;
  }

  public deleteItem(item) {
    alert(`Delete ${item.id}`);
  }

  @Input() items: Item;
}
