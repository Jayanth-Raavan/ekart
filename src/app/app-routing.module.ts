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
import { WatchesComponent } from './pages/watches/watches.component';
import { MobileComponent } from './pages/mobile/mobile/mobile.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'mobiles', component: MobilesComponent, canActivate: [authGuard] },
  { path: `mobile/:id`, component: MobileComponent, canActivate: [authGuard] },
  { path: 'laptops', component: LaptopsComponent, canActivate: [authGuard] },
  { path: 'shoes', component: ShoesComponent, canActivate: [authGuard] },
  { path: 'clothes', component: ClothesComponent, canActivate: [authGuard] },
  { path: 'watches', component: WatchesComponent, canActivate: [authGuard] },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
