import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css']
})
export class InfosComponent implements OnInit {

  @Input() infoInput: any;

  constructor() { }

  ngOnInit() {
  }
  priceColor(pricePlat : any) {
   let result = "";
   if (Number(pricePlat <0.5 && pricePlat > 5)) {
    result = "red";
    
   } else if (Number(pricePlat > 5 && pricePlat < 30)) {
    result ="green";
   }else{
    result ="blue"
   }
   return result;
  }

}
