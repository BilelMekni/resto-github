import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { generatId, getObjectsFromLS } from 'src/app/shared/genericfunction';
import { puts } from 'util';
import { PlatService } from './../../services/plat.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-add-plat',
  templateUrl: './add-plat.component.html',
  styleUrls: ['./add-plat.component.css']
})
export class AddPlatComponent implements OnInit {

  // form id
  platForm: FormGroup;
  //Define objet
  plat: any = {};
  id : any;
  imagePreview: any;
  formTitle : string ="Add Plat"
  img :any = {};
  constructor(
    private router : Router, 
    private activateRoute:ActivatedRoute,
    private platService :PlatService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get("x");
    if (this.id) {
      this.formTitle="Edit Plat"
      // let plats = getObjectsFromLS("plats");

      // this.plat= plats.find((obj:any)=> {return obj.id == this.id})
      // Get object by ID from BE
      this.platService.getPlatById(this.id).subscribe(
        (data) =>{
          this.plat = data.plat;
        }
      )
      
    }
  }
  // addPlat() {
    // let plats = JSON.parse(localStorage.getItem("plats") || "[]");
    // if (this.id) {
    //   // Edit plat
    //   for (let i = 0; i < plats.length; i++) {
    //     if (plats[i].id == this.id) {
    //       plats[i] = this.plat;
    //       break;
 
    //     }
      
    //   }
    // } else {
    
      
    // let userId = localStorage.getItem("connectedUserId");
    // this.plat.id = generatId(plats);
    // plats.push(this.plat);
    
  
    // }
   
    // localStorage.setItem("plats", JSON.stringify(plats));
    // localStorage.setItem("platId",userId);
    // // Navigation to admin
  // this.router.navigate(["admin"]);
  
  // }

  addPlat(){
if (this.id) {
  // Edit Plat
  this.platService.editPlat(this.plat).subscribe(
    (data) =>{
      console.log("Here message after edit", data.message);
      
    }
  );
  
} else {
  // Add PLat
  this.platService.addPlat(this.plat).subscribe(
    (response) =>{
    console.log("Here response", response);
});
  
}
this.router.navigate(["admin"]);
  }

  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.plat.patchValue({ img: file });
    this.plat.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }
  
}
