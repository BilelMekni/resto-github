import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chefs',
  templateUrl: './chefs.component.html',
  styleUrls: ['./chefs.component.css']
})
export class ChefsComponent implements OnInit {

  newschef : any = [
    {title:"Salah Hamdi",Description:"Chef Principale",image:"assets/img/team/chefs_1.png"},
    {title:"Wajdi Karoui",Description:"Sous Chef",image:"assets/img/team/chefs_2.png"},
    {title:"Hbib Jouini",Description:"Chef Exterieur",image:"assets/img/team/chefs_3.png"},
    {title:"Amin Hamzaoui",Description:"Chef Qualite",image:"assets/img/team/chefs_2.png"},
    {title:"Mohamed Arbi",Description:"Chef Production",image:"assets/img/team/chefs_1.png"},
    {title:"Wajih Jandoubi",Description:"Chef Hygiene",image:"assets/img/team/chefs_3.png"},
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
