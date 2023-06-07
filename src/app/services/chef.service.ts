import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChefService {
  chefUrl: string = "http://localhost:3001/chefs";

  constructor(private http:HttpClient) { }
  // Request : Add Chef
  // Response : string
  addChef(obj: any){
    return this.http.post<{status : string, isAdded : boolean}>(this.chefUrl, obj);
    }
     // Request : Edit Chef
  // Response : string
  editChef(obj: any){
    return this.http.put<{message : string}>(this.chefUrl, obj);
   }
   // Request : Get All Chefs
  // Response : [{}, {}, {} ...]
  getAllchefs(){
    return this.http.get<{chefs:any}>(this.chefUrl);
    }
    // Request : Get Chef By ID
  // Response : {}
  getChefById(id: any){
    return this.http.get<{chef : String , message : String}>(`${this.chefUrl}/${id}`);
  }
  // Request : Delete Chef By ID
  // Response : string
  deleteChef(id: any){
    return this.http.delete<{deletedChef : boolean}>(`${this.chefUrl}/${id}`);
  }

}
