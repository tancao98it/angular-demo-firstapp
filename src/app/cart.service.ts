import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product){
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  // Get shipping prices using HTTP Client
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

constructor(
  private http: HttpClient,
) { }



}
