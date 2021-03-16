import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fav-items',
  templateUrl: './fav-items.component.html',
  styleUrls: ['./fav-items.component.css']
})
export class FavItemsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    
  }
  itemDetails=[{
    pid: 7,
    image: "assets/images/blueberry_muffins2.jpeg",
    name: "Blueberry Oatmeal cake",
    price: "Euro 25.99",
    newPrice:"Euro 9.99",
    isFav: false,
    inCart: false
  }]; 
  modalClose(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }  
  
}



