import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})

// CHANGE ENVIRONMENT

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
    this.http.post(environment.server + '/addbouquet', {title: this.title, description: this.description, price: this.price, stock: this.stock, image: this.image}).subscribe(res =>{
      console.log(res)
      this.bouquets = res;
      // this.productAdded


    })
  }
  

}
