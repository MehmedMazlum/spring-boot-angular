import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import {CarListComponent} from './car-list/car-list.component';
import {HttpClientModule} from '@angular/common/http';
import {CarService} from './shared/car/car.service';
import {CarAddComponent} from './car-add/car-add.component';
import {CarSearchComponent} from './car-search/car-search.component';
import {LoginComponent} from './car-login/car-login.component';
import {FooterComponent} from './footer/footer.component';
import {LogoutComponent} from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarListComponent,
    CarAddComponent,
    CarSearchComponent,
    LoginComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent],
})
export class AppModule { }
