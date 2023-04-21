import { Component } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  products:Product[] = [
    {
      image: "../../assets/ready/product1.png",
      title: "Lavender Bliss Bouquet",
      description: "Elegant Bouquets Featuring Fragrant Lavender Blooms",
      price: "60.00 CAD",
      inStock: true

    },
    {
      image: "./../assets/ready/product2.png",
      title: "Garden Symphony Bouquet",
      description: "Exotic Hibiscus Bouquets for a Vibrant Floral Display",
      price: "70.00 CAD",
      inStock: false
    },
    {
      image: "./../assets/ready/product3.png",
      title: "Harmonious Hues Bouquet",
      description: "Lavender and Hibiscus Bouquets for a Fragrant Gift",
      price: "80.00 CAD",
      inStock: true
    }
  ]

}
