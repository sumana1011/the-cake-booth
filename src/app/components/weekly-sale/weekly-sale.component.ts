import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import {Product} from 'src/app/models/Product';
import { Observable } from 'rxjs';

@Component({
  selector: 'weekly-sale-ticker',
  templateUrl: './weekly-sale.component.html',
  styleUrls: ['./weekly-sale.component.css']
})
export class WeeklySaleComponent implements OnInit {
  itemDetails =[];
  constructor(public http:HttpClient) { }
  displayCake(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
  }
  modalClose(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

  }
  fetchData():Observable<Product> {
    return this.http.get<Product>(`assets/json/product-list.json`);
    
  };
  // itemDetails=[{
  //   pid: 7,
  //   image: "assets/images/blueberry_muffins2.jpeg",
  //   name: "Blueberry Oatmeal cake",
  //   price: "Euro 25.99",
  //   newPrice:"Euro 9.99",
  //   isFav: false,
  //   inCart: false
  // }];
  getData=()=>{this.fetchData()
  .subscribe((res)=>{
    console.log("weekly sale item:",res.weeklySaleItem);
    return this.itemDetails=res.weeklySaleItem;
  })}
  

  ngOnInit(): void {
    this.getData();
  }

}
