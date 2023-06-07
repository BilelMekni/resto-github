import { Component, OnInit } from '@angular/core';
import { addObject, getObjectsFromLS } from 'src/app/shared/genericfunction';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {


users : any = [];
  constructor( private router : Router , private userService : UserService) { }

  ngOnInit() {
    // this.users = getObjectsFromLS("users");
    this.userService.getAllUsers().subscribe(
      (response) =>{
        this.users= response.users
      });
  }
  // modifier
  goToEdit(id: number){
   
    this.router.navigate([`editUser/${id}`]);

}
deleteUsers(id : number){
  this.userService.deleteUsers(id).subscribe(
(response) =>{
  console.log("Here user after delete",response);
  
}
  );
  this.userService.getAllUsers().subscribe(
    (response) =>{
      this.users = response.users
    });
  }
}
