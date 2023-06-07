import { Component, OnInit } from '@angular/core';
import { PlatService } from './../../services/plat.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-plat-info',
  templateUrl: './plat-info.component.html',
  styleUrls: ['./plat-info.component.css']
})
export class PlatInfoComponent implements OnInit {
 plat: any ;
id: any;
  constructor( private platService : PlatService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.platService.getPlatById(this.id).subscribe(
      (data)=>{
        this.plat = data.plat
      }
    )
  }

  deleteInfPlat(id){
    alert(id);
    this.platService.deletePlat(id).subscribe(
      (response) =>{
        this.plat = response.platsDeleted
        console.log("Heere after delet",response);
        
      }
    )
  }

}
