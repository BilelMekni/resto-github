import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  platUrl: string = "http://localhost:3001/plats";

  constructor(private http:HttpClient) { }
   // Request : Add Plat
  // Response : string
  addPlat(obj: any){
    return this.http.post<{message: string ,isAdded: boolean}>(this.platUrl, obj);
    }
    // Request : Edit Plat
  // Response : string
  editPlat(obj: any){
    return this.http.put<{message : string}>(this.platUrl, obj);
   }
   // Request : Get All Plats
  // Response : [{}, {}, {} ...]
  getAllplats(){
    return this.http.get<{plats : any}>(this.platUrl);
    }
    // Request : Get Plat By ID
  // Response : {}
  getPlatById(id: any){
    return this.http.get<{plat : String , message : String}>(`${this.platUrl}/${id}`);
  }
   // Request : Delete Plat By ID
  // Response : string
  deletePlat(id: any){
    return this.http.delete<{platsDeleted : boolean}>(`${this.platUrl}/${id}`);
  }
  // Request : Search plats by name or price
  // Response : [{} ,{}, {}, ....]
  searchByPlats(obj : any){
    return this.http.post<{plats : any}>(`${this.platUrl}/search`,obj);

  }
}
