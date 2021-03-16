import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';  
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninAppComponent } from './components/signin-app/signin-app.component';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CakeItemsComponent } from './components/cake-items/cake-items.component';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductListComponent } from './components/product-list/product-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CakeItemDetailsComponent } from './components/cake-item-details/cake-item-details.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OnInit } from '@angular/core';
import { FavItemsComponent } from './components/fav-items/fav-items.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WeeklySaleComponent } from './components/weekly-sale/weekly-sale.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninAppComponent,
    CakeItemsComponent,
    ProductListComponent,
    FavoriteDirective,
    CakeItemDetailsComponent,
    FavItemsComponent,
    HomePageComponent,
    WeeklySaleComponent,
    NavBarComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    ScrollingModule,
    MatIconModule,
    MatTooltipModule,
    MatBadgeModule, 
    CommonModule,
    HttpClientModule,
    NgbModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}



