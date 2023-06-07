import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-chef',
  templateUrl: './dashboard-chef.component.html',
  styleUrls: ['./dashboard-chef.component.css']
})
export class DashboardChefComponent implements OnInit {

userId:any;
  plats:any;
  constructor() { }

  ngOnInit() {
    this.userId=localStorage.getItem("connectedUserId");
    this.plats = JSON.parse(localStorage.getItem("plats"));
    console.log("Here plats",this.plats);
    
  }

}
