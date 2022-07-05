import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  box1 = 'box1';
  cartItem: number = 0;
  showMe = true;
  foodArray = [
      {
        id:1,
        img:"../../assets/gulab.jpg",
        amt:100,
        qty:1
      },
      {
        id:2,
        img:"../../assets/dosa.jpg",
        amt:200,
        qty:1
      },
      {
        id:3,
        img:"../../assets/noodles.jpg",
        amt:250,
        qty:1
      },
      {
        id:4,
        img:"../../assets/pav-bhaji.jpg",
        amt:150,
        qty:1
      },
      {
        id:5,
        img:"../../assets/khadvi.jpg",
        amt:110,
        qty:1
      },
  ];

  onToggle(): void{
    this.showMe = !this.showMe;
   
  }
 
  add(f:any): void{
    //console.log(f.qty);
    if(f.qty!=10){
    f.qty = f.qty + 1;
    }
  }

  minus(f:any): void{
    if(f.qty !=1){
    f.qty = f.qty - 1;
    }
  }

  cartArray:any = [];
  addCart(f:any){
  this.cartItem = this.cartItem + f.qty;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
