import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  bouquets:any;
  id = '';
  title = '';
  description= '';
  price= '';
  stock= '';
  image= '';
  visibilityClass = 'invisible';

  constructor (private http: HttpClient){}

  ngOnInit(): void {
    this.http.get<Product>('http://localhost:4600/bouquets').subscribe(response => {
      console.log("Response is ", response)
      this.bouquets = response.bouquets
      console.log (this.bouquets)
    })
  }

  editData() {
    this.visibilityClass = 'visible';

    this.http.get<Product>(`http://localhost:4600/bouquets/10`).subscribe(response => {
      console.log("Response is ", response)
      this.bouquets = response
      console.log (this.bouquets)
      console.log(this.bouquets.message.id)
    })
  }



}
