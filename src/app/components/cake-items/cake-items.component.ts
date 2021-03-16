import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Product} from '../../models/Product';
@Component({
  selector: 'cake-items-app',
  templateUrl: './cake-items.component.html',
  styleUrls: ['./cake-items.component.css'],
})
export class CakeItemsComponent implements OnInit {
  @Input() itemDetails;
  // @Output() badgeCount = new EventEmitter();
  @Output() favItem = new EventEmitter();
  // favBadgeCount = 0;
  // newFavBadgeCount = 0;
  favoriteItem = '';
  favItemsArray=[];
  setNewIsFav(item,value){
    console.log("pid and value",item.pid,value);
    this.itemDetails.isFav = value;
    return this.http.post<Product>(`assets/json/product-list.json/${item.pid}`,
    {
      isFav : value
    });
    
  }
  addFav() {

      var markFav = document.getElementById('favItem');

      if(this.itemDetails.isFav===false){
        //document.getElementById('favItem').style.fill = "rgb(192, 87, 87)" ;
        //this.itemDetails.isFav = true;
        this.setNewIsFav(this.itemDetails,true);
        // this.favItemsArray.push(this.itemDetails);
        // console.log("after push",this.favItemsArray);
        this.favItem.emit(this.itemDetails);
        console.log("Item at the end of if",this.itemDetails);

        //return this.itemDetails.isFav = true;
      }
      else{
        markFav.style.fill = "rgb(143, 79, 143)" ;
        this.setNewIsFav(this.itemDetails,false)
        this.favItem.emit(this.itemDetails);
        console.log(this.itemDetails);
        return this.itemDetails.isFav = false;
        
      }
  }
  addCart() {}
  

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
}
