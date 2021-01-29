import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'cake-items-app',
  templateUrl: './cake-items.component.html',
  styleUrls: ['./cake-items.component.css']
})
export class CakeItemsComponent implements OnInit {
  @Input() itemDetails;
  // @Output() badgeCount = new EventEmitter();
   @Output() favItem = new EventEmitter();
  // favBadgeCount = 0;
  // newFavBadgeCount = 0;
  favoriteItem='';
  addFav() {
      // this.newFavBadgeCount = this.favBadgeCount++;
      // console.log(this.newFavBadgeCount);
      // this.badgeCount.emit(this.newFavBadgeCount);
      // this.itemDetails.isFav='true';
      // console.log(this.itemDetails.isFav);
     
      var svg = document.getElementById('favItem');
      
      if(this.itemDetails.isFav===false){
        document.getElementById('favItem').style.fill = "rgb(192, 87, 87)" ;
        this.itemDetails.isFav = true;
        this.favItem.emit(this.itemDetails);
        console.log(this.itemDetails);
        return this.itemDetails.isFav = true;
      }
      else{
        document.getElementById('favItem').style.fill = "rgb(143, 79, 143)" ;
        this.itemDetails.isFav = false;
        this.favItem.emit(this.itemDetails);
        console.log(this.itemDetails);
        return this.itemDetails.isFav = false;
        
      }
      
  }
  addCart() { }


  constructor() { }

  ngOnInit(): void {
  }

}
