import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent{
    @Input() product:Product = {
        id: '0',
      image: 'assets/images/stickers1.png',
      title: 'Stickers',
      price: 80000,
      description: 'bla bla bla bla bla'
    };

    @Output() productClicked:EventEmitter<any> = new EventEmitter;

    constructor(){

    }
    addCart(){
        console.log('añadir al carrito')
        this.productClicked.emit(this.product.id);
    }
}