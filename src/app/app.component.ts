import { Component, OnInit } from '@angular/core';
import { Item } from './shared/item.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  items: Item[];

  ngOnInit() {
    this.getItems();
  }

  getItems() {
    this.items =  [{
      id: 0,
      name: 'Nibh praesent tristique',
      heading: 'Egestas purus viverra accumsan in nisl nisi',
      description: 'Tincidunt arcu non sodales neque sodales ut etiam. Et malesuada fames ac turpis. Pharetra convallis posuere morbi leo urna molestie at elementum.'
    },
    {
      id: 1,
      name: 'Tellus in hac habitasse',
      heading: 'Odio tempor',
      description: 'Ut ornare lectus sit amet est placerat. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. '
    }]
  }
}
