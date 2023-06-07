import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PlatService } from 'src/app/services/plat.service';

@Component({
  selector: 'app-search-plats',
  templateUrl: './search-plats.component.html',
  styleUrls: ['./search-plats.component.css']
})
export class SearchPlatsComponent implements OnInit {
  // form id
  searchForm: FormGroup;
  plats : any ;
  //Define objet
  search: any = {};
  id : any;

  constructor( private platService : PlatService) { }

  ngOnInit() {
  }
  searchPlat(){
    console.log("here search",this.search);
    this.platService.searchByPlats(this.search).subscribe(
      (data) =>{
        this.plats = data.plats;
        // console.log("Here finded",data.plats);
        
      }
    )
    
  }


}
