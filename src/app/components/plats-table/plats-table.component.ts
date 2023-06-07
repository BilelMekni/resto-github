import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlatService } from './../../services/plat.service';

@Component({
  selector: 'app-plats-table',
  templateUrl: './plats-table.component.html',
  styleUrls: ['./plats-table.component.css']
})
export class PlatsTableComponent implements OnInit {

plats: any = [];
  constructor(private router : Router, private platService :PlatService) { }

  ngOnInit() {
    // this.plats = JSON.parse(localStorage.getItem("plats") || "[]");
    
    this.platService.getAllplats().subscribe(
      (response)=>{
        this.plats = response.plats 
        
      }
    );

    
  }
  goToEdit(id: number){
   
    this.router.navigate([`Editplat/${id}`]);
  }
   // delete from ls
   deletePlats(id: number) {
    this.platService.deletePlat(id).subscribe(
      (response) =>{
        console.log("Here users after delete",response);
        
      }

    );
    this.platService.getAllplats().subscribe(
      (response)=>{
        this.plats = response.plats 
        
      }
    );


  }
  goToDisplay(id : number){
this.router.navigate([`platInfo/${id}`])
  }

}
