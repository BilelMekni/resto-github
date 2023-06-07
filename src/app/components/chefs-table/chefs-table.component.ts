import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { generatId } from 'src/app/shared/genericfunction';
import { deleteId } from 'src/app/shared/deleteid';
import { ChefService } from 'src/app/services/chef.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chefs-table',
  templateUrl: './chefs-table.component.html',
  styleUrls: ['./chefs-table.component.css']
})
export class ChefsTableComponent implements OnInit {

  chefs: any = [];
  constructor(private chefService : ChefService, private router : Router) { }

  ngOnInit() {
    // this.chefs = JSON.parse(localStorage.getItem("chefs") || "[]");
    // this.chefs.id = deleteId(this.chefs);
    
    this.chefService.getAllchefs().subscribe(
      (response) =>{
        this.chefs = response.chefs
      }
    );
    console.log("here chefs",this.chefs);
    
   
   
        }
        goToEdit(id: number){
   
          this.router.navigate([`editchef/${id}`]);
        }
         
    deleteChefs(id: number) {
      this.chefService.deleteChef(id).subscribe(
        (response) =>{
          console.log("Here chef after delete",response);
          
        }
      );
      this.chefService.getAllchefs().subscribe(
        (response) =>{
          this.chefs = response.chefs
        }
        
      );
    }
  
  
  
  
  }
