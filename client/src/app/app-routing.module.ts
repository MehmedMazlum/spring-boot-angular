import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './car-list/car-list.component';
import { HomeComponent } from './home/home.component';
import {CarAddComponent} from './car-add/car-add.component';
import {CarSearchComponent} from './car-search/car-search.component';
import {LoginComponent} from './car-login/car-login.component';
import {LogoutComponent} from './logout/logout.component';

const routes: Routes = [
  {path: '', redirectTo: '/car-login', pathMatch: 'full'},
  {
    path: 'car-login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cars-list',
    component: CarListComponent
  },
  {
    path: 'cars-add',
    component: CarAddComponent
  },
  {
    path: 'cars-search',
    component: CarSearchComponent
  },
  {
    path: 'cars-logout',
    component: LogoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
