import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'cake-items-app',
  templateUrl: './cake-items.component.html',
  styleUrls: ['./cake-items.component.css']
})
export class CakeItemsComponent implements OnInit {
  @Input() itemDetails;
  @Output() badgeCount = new EventEmitter();
  @Output() favItem = new EventEmitter();
  favBadgeCount = 0;
  newFavBadgeCount = 0;
  favoriteItem='';
  addFav() {
      this.newFavBadgeCount = this.favBadgeCount++;
      console.log(this.newFavBadgeCount);
      this.badgeCount.emit(this.newFavBadgeCount);
      this.itemDetails.isFav='true';
      console.log(this.itemDetails.isFav);
      this.favItem.emit(this.itemDetails);
  }
  addCart() { }


  constructor() { }

  ngOnInit(): void {
  }

}
