import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 

  title = 'cake-shop-app';
  
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
}


export class NgbdDropdownForm {
}
