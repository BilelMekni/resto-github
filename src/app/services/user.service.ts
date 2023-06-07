import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl : string ="http://localhost:3001/users";


  constructor(private HttpClient: HttpClient) { }
  // Request : signup
  // Response : string
  signup(obj : any , img:File){
    let formData = new FormData();
    formData.append("name",obj.name);
    formData.append("lastName",obj.lastName);
    formData.append("email",obj.email);
    formData.append("pwd",obj.pwd);
    formData.append("pwd",obj.tel);
    formData.append("pwd",obj.adresse);
    formData.append("img",img);

    return this.HttpClient.post<{message :string,isAdded : boolean}>(`${this.userUrl}/signup`, formData);
  }
  // Request : login
  // Response : string
  login(user : any){
    return this.HttpClient.post<{msg : String}>(`${this.userUrl}/login`, user);

  }
  // Request : Edit user
  // Response : string
  editUser(user: any){
    return this.HttpClient.put(this.userUrl,user);
  }
   // Request : Get All Users
  // Response : [{}, {}, {} ...]
  getAllUsers(){
    return this.HttpClient.get<{users : any}>(this.userUrl);
  }
 // Request : delete user
  // Response : string
  deleteUsers(id : any){
    return this.HttpClient.delete<{isDeletedUsers: boolean}>(`${this.userUrl}/${id}`);
  }
}
