import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChefsTableComponent } from './components/chefs-table/chefs-table.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PlatsTableComponent } from './components/plats-table/plats-table.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { SearchPlatsComponent } from './components/search-plats/search-plats.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component';


const routes: Routes = [
  //http://localhost:4200/
  {path:"", component:HomeComponent},
  //http://localhost:4200/login => Afiicher login Component
 {path:"login" , component:LoginComponent},
  //http://localhost:4200/login => Afiicher signup Component
 {path:"substraction" , component:SignupComponent},
 //http://localhost:4200/login => Afiicher signup Component
 {path:"signupAdmin" , component:SignupComponent},
 //http://localhost:4200/login => Afiicher modifier user Component
 {path:"editUser/:x" , component:SignupComponent},
  //http://localhost:4200/login => Afiicher addchef Component
 {path:"addchef" , component:AddChefComponent},
  //http://localhost:4200/login => Afiicher addplat Component
  {path:"editchef/:x" , component:AddChefComponent},
  //http://localhost:4200/login => Afiicher addplat Component
 {path:"addplat" , component:AddPlatComponent},
 //http://localhost:4200/login => Afiicher editplat Component
 {path:"Editplat/:x" , component:AddPlatComponent},
 //http://localhost:4200/login => Afiicher admin Component
 {path:"admin" , component:AdminComponent},
 //http://localhost:4200/login => Afiicher users table Component
 {path :"users" ,component:UsersTableComponent},
 //http://localhost:4200/login => Afiicher plats table Component
 {path:"plats" , component:PlatsTableComponent},
 //http://localhost:4200/login => Afiicher chefs table Component
 {path:"chefs" , component:ChefsTableComponent},
 //http://localhost:4200/login => Afiicher chefs Component
 {path:"tousChefs",component:ChefsComponent},
 //http://localhost:4200/login => Afiicher chefs Component
 {path:"dashboardPlats",component:DashboardChefComponent},
//http://localhost:4200/search => Aficher search plats Component
{path:"searchPlats",component:SearchPlatsComponent},
//http://localhost:4200/plat info => Aficher  plat info Component
{path:"platInfo/:id",component:PlatInfoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
