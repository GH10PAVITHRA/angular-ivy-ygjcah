import { Component,Input,Output,EventEmitter,OnInit } from '@angular/core';
import { Product } from '../productFile';
@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent  {
  @Input() productInside: Product | undefined;
  @Output() notify = new EventEmitter();
  

}