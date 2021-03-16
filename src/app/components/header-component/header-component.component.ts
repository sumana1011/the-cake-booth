import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

  constructor() { }
    
  OnSignUp() {
    console.log('Sign up successful!');
    var blank = '';
    document.getElementById('prodlistdiv').innerHTML = blank;
  }
  
  getFavItems(){
    fetch(`assets/json/product-list.json`)
    .then((res)=>{
      return res.json();
    })
    .then((data)=>{
      console.log("From getFavItems",data);
      data.cakesList.forEach(item => {
        console.log("Item:", item);
        console.log("pid",item.pid);
        console.log("isFav",item.isFav);
        if(item.isFav==='false'){
          console.log("Reaching items",item);
        }
        
      });
    })
    
  }




  ngOnInit(): void {
  }

}
export class NgbdDropdownForm {
}
