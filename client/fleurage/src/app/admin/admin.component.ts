import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface';
import { ActivatedRoute } from '@angular/router';

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
  display:any = ''

  constructor (private http: HttpClient, private route:ActivatedRoute){}

  ngOnInit(): void {
    this.http.get<Product>('http://localhost:4600/bouquets').subscribe(response => {
      console.log("Response is ", response)
      this.bouquets = response.bouquets
      console.log (this.bouquets)
    })
  }

  // editData() {
  //   this.visibilityClass = 'visible';
  //   this.http.get<Product>(`http://localhost:4600/bouquets/10`).subscribe(response => {
  //     console.log("Response is ", response)
  //     this.bouquets = response
  //     console.log (this.bouquets)
  //     console.log(this.bouquets.message.id)
  //   })
  // }


//control set by Bootstrap properties like [checked]="string interpolation"

  //possible to pass ID as parameter, and accept it in angular via string interpolation
  delete(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    //change ID to what 's supposed to be deleted
    this.http.delete(`http://localhost:4600/bouquets/${id}`).subscribe(res => {
      console.log ('Res is ', res)
      this.bouquets = res
    })
  }

  showProduct(){
    // this.display = 1;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.put(`http://localhost:4600/updatedisplay/${id}`, {display: 1}).subscribe (res => {
      console.log ('Product is displayed', res)
      this.bouquets = res
      console.log(this.bouquets)
    })
  }

  hideProduct(){
    // this.display = 0;
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.put(`http://localhost:4600/updatedisplay/${id}`, {display: 0}).subscribe (res => {
      console.log ('Product is displayed', res)
      this.bouquets = res
      console.log(this.bouquets)
    })
  }



}
