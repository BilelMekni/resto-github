import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ChefService } from 'src/app/services/chef.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-chef',
  templateUrl: './add-chef.component.html',
  styleUrls: ['./add-chef.component.css']
})
export class AddChefComponent implements OnInit {
// form ID
chefForm : FormGroup;
id : any;
  // Define Object
  chef: any = {};
  formTitle: string = "Add Chef";
  constructor(private chefService : ChefService,
    private router : Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("x");
    if (this.id) {
      this.formTitle= "Edit Chef";
      // search object by ID
      this.chefService.getChefById(this.id).subscribe(
        (data) => {
          this.chef = data.chef;
        }
      )
    }
  }
  // methode (ngSubmit)
  // addChef() {
  // let chefs = JSON.parse(localStorage.getItem("chefs") || "[]");
  // let chefId = JSON.parse(localStorage.getItem("chefId") || "0");
  // this.chef.id = chefId + 1;
  // chefs.push(this.chef);
  // localStorage.setItem("chefs",JSON.stringify(chefs));
  // localStorage.setItem("chefId",  chefId + 1 );

 

  
 
// }
addChef(){
  if (this.id) {
    // Edit Plat
    this.chefService.editChef(this.chef).subscribe(
      (data) =>{
        console.log("Here message after edit", data.message);
        
      }
    );
    
  } else {
    // Add PLat
    this.chefService.addChef(this.chef).subscribe(
      (response) =>{
        console.log("Here response",response);
    });
    
  }
  this.router.navigate(["admin"]);
}
}
