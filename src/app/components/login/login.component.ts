import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { getObjectsFromLS } from 'src/app/shared/genericfunction';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usersTab:any = [];
  user:any =[];
  email:string;
  pwd:string;
  

// form Id
loginForm : FormGroup;
  constructor(private router:Router,
    private FormBuilder : FormBuilder, private userService : UserService ) { }

  ngOnInit() {
    this.loginForm = this.FormBuilder.group({
      email:["",[Validators.required,Validators.email]],
      pwd:["",[Validators.required]],
    })
  }
  login(){
   
    this.userService.login(this.loginForm.value).subscribe(
      (response)=>{
        console.log("Here response after logn",response);
        if (response.msg !="2") {
          
        }else{
          this.router.navigate([""]);
        }
      }
      
    );
    






    // this.user = this.loginForm.value;

//     this.usersTab = getObjectsFromLS("users");
//     let userExist = false;
//     for (let i = 0; i < this.usersTab.length; i++) {
//       if (this.loginForm.value.email== this.usersTab[i].email && this.loginForm.value.pwd == this.usersTab[i].pwd) {
//        this. user = this.usersTab[i];
//        userExist = true;
//        break;
        
//       }
      
//     }
//     if (userExist == true) {
//       localStorage.setItem("connectedUserId",this.user.id);
//       this.router.navigate([""]);
//     }else{
      
//       this.user="please check login/pwd"

 
//     }


//   }

}
}