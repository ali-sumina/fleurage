import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface';
import { ActivatedRoute } from '@angular/router';

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

  constructor (private http:HttpClient, private route:ActivatedRoute){}


  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id)
    this.http.get<Product>(`http://localhost:4600/bouquets/${id}`).subscribe(response => {
      console.log("Response is ", response)
      this.bouquets = response
      console.log (this.bouquets)
      console.log(this.bouquets.message.id)
    })
  }

  save() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.title, this.description, this.price, this.stock, this.image)
    this.http.put(`http://localhost:4600/bouquets/${id}`, {id: this.id, title: this.title, description: this.description, price: this.price, stock: this.stock, image: this.image}).subscribe(response => {
      console.log("Response is ", response)
      this.bouquets = response
      console.log (this.bouquets)
    })
  }

  updateStock() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log("Before stock was", this.stock)
    this.http.put(`http://localhost:4600/updatestock/${id}`, {id: this.id, stock: this.stock}).subscribe(response => {
      console.log("Response is ", response)
      this.bouquets = response
      console.log (this.bouquets)
    })
  }


}
