import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() public shopData:any;
  @Input() public plus:any;

  constructor() { }

  ngOnInit(): void {
  }

}
