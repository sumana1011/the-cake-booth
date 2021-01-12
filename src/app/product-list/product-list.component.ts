import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  itemDetails = [
    {
    pid:1,
    image:"assets/images/Honey_cake.jpg",
    name:"Honey Cake",
    price:"Euro 25.99",
    isFav:"true",
    inCart:"True"
    },
    { 
    pid:2,
    image:"assets/images/Pinacolada_Cake.jpg",
    name:"Pinacolada cake",
    price:"Euro 25.99",
    isFav:"true",
    inCart:"True"
    },

    { pid:3,
      image:"assets/images/Rainbow_Cake.jpg",
      name:"Rainbow Cake",
      price:"Euro 25.99",
      isFav:null,
      inCart:null
    },
    { pid:4,
      image:"assets/images/Maracuja_Cake.jpg",
      name:"Maracuja cake",
      price:"Euro 25.99",
      isFav:null,
      inCart:"True"
    },
    { pid:5,
      image:"assets/images/Vanilla_Cake.jpg",
      name:"Vanilla cake",
      price:"Euro 25.99",
      isFav:null,
      inCart:null
    },
    {
      pid:6,
      image:"assets/images/Choco_Hazelnut_Cake.jpg",
      name:"Chocolate Hazelnut Cake",
      price:"Euro 25.99",
      isFav:null,
      inCart:null
    }

];
 

  onAddtoFav(){}
  constructor() { }

  ngOnInit(): void {
    
  }


}
