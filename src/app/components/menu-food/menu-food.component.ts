import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-food',
  templateUrl: './menu-food.component.html',
  styleUrls: ['./menu-food.component.css']
})
export class MenuFoodComponent implements OnInit {
  newsMenu: any=[
    {title:"Morceau Gateau",description:"Wellcome To Foods1",price:"3DT",image:"assets/img/food_menu/single_food_1.png"},
    {title:" Plat Salat",description:"Wellcome To Foods2",price:"6DT",image:"assets/img/food_menu/single_food_2.png"},
    {title:"Vivande",description:"Wellcome To Foods3",price:"12DT",image:"assets/img/food_menu/single_food_3.png"},
    {title:"Sandwitch Hamberger",description:"Wellcome To Foods4",price:"15DT",image:"assets/img/food_menu/single_food_4.png"},
    {title:"Plat vivande",description:"Wellcome To Foods5",price: "20DT",image:"assets/img/food_menu/single_food_5.png"},
    {title:"Plat Tomate",description:"Wellcome To Foods6",price:"30DT",image:"assets/img/food_menu/single_food_6.png"}

  ];

  constructor() { }

  ngOnInit() {
  }

}
