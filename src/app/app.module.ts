import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TopBarComponent } from './top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';

import { ProductListComponent } from './product-list/product-list.component';
import { ShippingComponent} from './shipping/shipping.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart.service';
@NgModule({
   declarations: [
      AppComponent,
      TopBarComponent,
      ProductListComponent,
      ProductAlertsComponent,
      ProductDetailsComponent,
      CartComponent,
      ShippingComponent

   ],
   imports: [
      BrowserModule,
      ReactiveFormsModule,
      AppRoutingModule,
      HttpClientModule
   ],
   providers: [
     CartService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
