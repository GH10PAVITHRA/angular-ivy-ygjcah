import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,
  RouterModule.forRoot([
{path:"" , component:ProductListComponent}
{ path: 'products/:productId', component: ProductDetailsComponent },
{ path: 'cart', component: CartComponent },
{ path: 'shipping', component: ShippingComponent },

  ])
  
  ],
  declarations: [ AppComponent, HelloComponent ,TopBarComponent,ProductListComponent,ProductAlertComponent,ProductDetailsComponent,CartComponent,ShippingComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
