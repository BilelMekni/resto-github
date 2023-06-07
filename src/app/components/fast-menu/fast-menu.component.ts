import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fast-menu',
  templateUrl: './fast-menu.component.html',
  styleUrls: ['./fast-menu.component.css']
})
export class FastMenuComponent implements OnInit {

@Input() fastMenuInput: any;
  constructor() { }

  ngOnInit() {
  }
  priceColor(price : any){
    let result = "";
    if (price < 0.5 && price>5) {
      result = "green";
      
    } else if (price < 5 && price >30) {
      result = "red";
    } else{
      result = "blue";
    }
    return result;
  }

}
