
import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  
  printAny = (f : any) =>{
    console.log("from print()" + f);
  }
  
 
  // getJSON(){
  // var data;
  // var JSONdata;
  //   var request = new XMLHttpRequest();
  //   request.open('GET', 'assets/json/product-list.json');

  //   request.onload = function () {
  //     if (request.status === 200) {
  //       data= JSON.parse(request.response);
  //       console.log(data);
  //       console.log("Data before exiting:" + data);
      
  //         }
  //         console.log("Data after exiting:" + data);
  //         JSONdata = data;
  //       }
        
  //       request.send();
  //       console.log("JSONdata = " + JSONdata);
  //       return JSONdata;
        
  // }
 
  a = 5;
  // s = this.getJSON();
  d = this.printAny(this.a);

  
  
  
  itemDetails= [
    {
      pid: 1,
      image: "assets/images/Honey_cake.jpg",
      name: "Honey Cake",
      price: "Euro 25.99",
      isFav: false,
      inCart: true
    },
    {
      pid: 2,
      image: "assets/images/Pinacolada_Cake.jpg",
      name: "Pinacolada cake",
      price: "Euro 25.99",
      isFav: false,
      inCart: true
    },
    {
      pid: 3,
      image: "assets/images/Rainbow_Cake.jpg",
      name: "Rainbow Cake",
      price: "Euro 25.99",
      isFav: false,
      inCart: false
    },
    {
      pid: 4,
      image: "assets/images/Maracuja_Cake.jpg",
      name: "Maracuja cake",
      price: "Euro 25.99",
      isFav: false,
      inCart: true
    },
    {
      pid: 5,
      image: "assets/images/Vanilla_Cake.jpg",
      name: "Vanilla cake",
      price: "Euro 25.99",
      isFav: false,
      inCart: false
    },
    {
      pid: 6,
      image: "assets/images/Choco_Hazelnut_Cake.jpg",
      name: "Chocolate Hazelnut Cake",
      price: "Euro 25.99",
      isFav: false,
      inCart: false
    },
    {
      pid: 7,
      image: "assets/images/blueberry_muffins.jpeg",
      name: "Blueberry Oatmeal cake",
      price: "Euro 25.99",
      isFav: false,
      inCart: false
    }
  ];

  //prodDetails: [];
  //httpService: HttpClient;


  

  onAddtoFav() { }
  constructor() {
   

  }
  ngOnInit()  {
    // var data;

    // var request = new XMLHttpRequest();
    // request.open('GET', 'assets/json/product-list.json');

    // request.onload = function () {
    //   if (request.status === 200) {
    //     data= JSON.parse(request.response);
        
    //     console.log(data);
    //     console.log("Data before exiting:" + data);
      
    //       }
    //       console.log("Data after exiting:" + data);
    //       return data;
    //     }
    //     request.send();
    //     console.log("hit ngOnInit");
        
        
        
        
    //   }
    // this.httpService.get('src/assets/json/product-list.json').subscribe(
    //   data => {
    //     this.prodDetails = data as [];
    //     console.log(this.prodDetails);

    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log(err.message);
    //   });

  
}
}


