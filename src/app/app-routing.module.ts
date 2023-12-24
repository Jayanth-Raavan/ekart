import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { MobilesComponent } from './pages/mobile/mobiles/mobiles.component';
import { LaptopsComponent } from './pages/laptop/laptops/laptops.component';
import { ShoesComponent } from './pages/footwear/shoes/shoes.component';
import { ClothesComponent } from './pages/clothes/clothes/clothes.component';

const routes: Routes = [

  {path:'', component:DashboardComponent,canActivate: [authGuard]},
  {path:'signup', component:SignupComponent},
  {path:'login',component:LoginComponent },
  {path:'home', component:HomeComponent},
  {path:'mobiles',component:MobilesComponent},
  {path:'laptops',component:LaptopsComponent},
  {path:'shoes',component:ShoesComponent},
  {path:'clothes',component:ClothesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
