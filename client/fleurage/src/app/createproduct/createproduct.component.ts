import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})

export class CreateproductComponent implements OnInit{

  bouquets:any;
  title = '';
  description = '';
  price = '';
  stock = '';
  image = '';
  productAdded:string = '';


  constructor (private http:HttpClient){

  }
  ngOnInit(): void {
  }

  createProduct(){
    this.http.post('http://localhost:4600/addbouquet', {title: this.title, description: this.description, price: this.price, stock: this.stock, image: this.image}).subscribe(res =>{
      console.log(res)
      this.bouquets = res;
      // this.productAdded


    })
  }
  

}
