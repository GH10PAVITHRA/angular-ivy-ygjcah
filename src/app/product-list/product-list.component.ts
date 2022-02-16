import { Component, OnInit } from '@angular/core';
import { ProductFromFile } from '../../productFile';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
products = ProductFromFile;
  constructor() { }
  share() {
    window.alert('The product has been shared!');
  }

  buy() {
    alert('The product has been added to cart.!');
  }
  ngOnInit() {
  }

}