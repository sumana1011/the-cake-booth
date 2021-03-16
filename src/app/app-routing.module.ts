import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakeItemDetailsComponent } from './components/cake-item-details/cake-item-details.component';
import { FavItemsComponent } from './components/fav-items/fav-items.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SigninAppComponent } from './components/signin-app/signin-app.component';

const routes: Routes =[  
  {path:"SignUp",component:SigninAppComponent},
{path:"cupcakes", component:ProductListComponent},
{path:"cakes", component:ProductListComponent },
{path:"favItems", component:FavItemsComponent},
{path:"", component:HomePageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
