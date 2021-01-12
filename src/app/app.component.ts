import { Component } from '@angular/core';
import { SigninAppComponent } from './signin-app/signin-app.component';
import { Router } from '@angular/router';

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
    document.getElementById('Products').innerHTML = blank;
  }
  
}
export class NgbdDropdownForm {
}