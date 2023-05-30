import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface';

@Component({
  selector: 'app-editinfo',
  templateUrl: './editinfo.component.html',
  styleUrls: ['./editinfo.component.scss']
})
export class EditinfoComponent implements OnInit {

  bouquets:any;
  id = 10;
  title = '';
  description= '';
  price= '';
  stock= '';
  image= '';

  constructor (private http:HttpClient){}


  ngOnInit(): void {
    this.http.get<Product>('http://localhost:4600/bouquets/10').subscribe(response => {
      console.log("Response is ", response)
      this.bouquets = response
      console.log (this.bouquets)
      console.log(this.bouquets.message.id)
    })
  }

  save() {
    console.log(this.title, this.description, this.price, this.stock, this.image)
    this.http.put('http://localhost:4600/bouquets/10', {id: this.id, title: this.title, description: this.description, price: this.price, stock: this.stock, image: this.image}).subscribe(response => {
      console.log("Response is ", response)
      this.bouquets = response
      console.log (this.bouquets)
    })
  }

  updateStock() {
    console.log("Before stock was", this.stock)
    this.http.put('http://localhost:4600/updatestock/10', {id: this.id, stock: this.stock}).subscribe(response => {
      console.log("Response is ", response)
      this.bouquets = response
      console.log (this.bouquets)
    })
  }


}
