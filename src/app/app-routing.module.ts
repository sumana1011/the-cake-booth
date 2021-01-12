import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninAppComponent } from './signin-app/signin-app.component';

const routes: Routes =[  
  {path:"SignUp",component:SigninAppComponent}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
