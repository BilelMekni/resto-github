import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  itemsTab: any = [
    {title:"Title1",Description:"humberger" ,price:"5DT",image:"assets/img/food_item/food_item_1.png",icone:"assets/img/icon/left_2.svg"},
    {title:"Title2",Description: "plat makarouna" ,price:"10DT" ,image:"assets/img/food_item/food_item_2.png",icone:"assets/img/icon/quate.svg"},
    {title:"Title3",Description:"viande rouge" ,price:"20DT",image:"assets/img/food_item/food_item_3.png",icone:"assets/img/icon/left_3.svg"},
    {title:"Title4",Description:"sandwitch",price:"30DT",image:"assets/img/food_item/food_item_1.png",icone:"assets/img/icon/play.svg"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
