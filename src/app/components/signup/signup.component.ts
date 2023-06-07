import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { addObject, generatId, getObjectsFromLS } from 'src/app/shared/genericfunction';
import { MustMatch } from 'src/app/validators/mustMatch';
import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usersTab: any = [];
  user: any = [];
  path : string;
  imagePreview : any;
  // form ID
  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService : UserService, private router : Router) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      lastName: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ["", [Validators.required, Validators.email]],
      pwd: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
      tel: ["", [Validators.required]],
      adresse: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      confirmPwd: [""],
      img: [""],
       
      }, {
        validators:MustMatch("pwd" ,"confirmPwd")
      
    })
    this.usersTab = getObjectsFromLS("users");
  }
  // call fin when btn click
  signup() {
    this.path = this.router.url
    console.log("here object",this.signupForm.value);
    let role = (this.path == "/substraction") ? "user" : "admin";
    this.signupForm.value.role = role;
    this.userService.signup(this.signupForm.value,this.signupForm.value.img).subscribe(
      (response) => {
        console.log("herer after signup",response);
        
      }
    );
    
   

  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);
    }

}
