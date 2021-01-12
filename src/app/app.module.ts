import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninAppComponent } from './signin-app/signin-app.component';
import { RouterModule, Routes } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CakeItemsComponent } from './cake-items/cake-items.component';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import { ProductListComponent } from './product-list/product-list.component';
import { FavoriteDirective } from './favorite.directive';
import { CakeItemDetailsComponent } from './cake-item-details/cake-item-details.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninAppComponent,
    CakeItemsComponent,
    ProductListComponent,
    FavoriteDirective,
    CakeItemDetailsComponent
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
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  

}


