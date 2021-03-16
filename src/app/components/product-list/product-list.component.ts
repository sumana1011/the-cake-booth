import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {Product} from '../../models/Product';
import { Observable } from 'rxjs';
@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pathName: string;
  itemDetails = [];
  constructor(location: Location, private httpClient: HttpClient) {
    this.pathName = location.path().slice(1);
    console.log('Path is', this.pathName);
  }
  fetchData():Observable<Product> {
    return this.httpClient.get<Product>(`assets/json/product-list.json`);
    
  };
  onAddtoFav() {
    console.log("AT ADDTOFAV");
  }

  printAny = (f: any) => {
    console.log('from print()' + f);
  };
  a = 5;
  d = this.printAny(this.a);
  ngOnInit() {
    var getItems =
      this.fetchData()
        .subscribe((data) => {
          if (this.pathName === 'cakes') {
            console.log('The json is (cake)', data.cakesList);
            this.itemDetails=data.cakesList;
            return data.cakesList;
          } else if (this.pathName === 'cupcakes') {
            console.log('The json is (cupcake)', data.cupcakeList);
            this.itemDetails=data.cupcakeList;
            return data.cupcakeList;
          }})
    };
  }

