import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddPlatComponent } from './components/add-plat/add-plat.component';
import { AddChefComponent } from './components/add-chef/add-chef.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ItemsComponent } from './components/items/items.component';
import { AboutFoodsComponent } from './components/about-foods/about-foods.component';
import { MenuFoodComponent } from './components/menu-food/menu-food.component';
import { ChefsComponent } from './components/chefs/chefs.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { BlogComponent } from './components/blog/blog.component';
import { ReviewComponent } from './components/review/review.component';
import { InfosComponent } from './components/infos/infos.component';
import { ArticleComponent } from './components/article/article.component';
import { BannerComponent } from './components/banner/banner.component';
import { AdminComponent } from './components/admin/admin.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { PlatsTableComponent } from './components/plats-table/plats-table.component';
import { ChefsTableComponent } from './components/chefs-table/chefs-table.component';
import { LigneChefComponent } from './components/ligne-chef/ligne-chef.component';
import { ChefComponent } from './components/chef/chef.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardChefComponent } from './components/dashboard-chef/dashboard-chef.component';
import { FastMenuComponent } from './components/fast-menu/fast-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPlatsComponent } from './components/search-plats/search-plats.component';
import { PlatInfoComponent } from './components/plat-info/plat-info.component'; // manuellement

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    AddPlatComponent,
    AddChefComponent,
    CupEventComponent,
    ItemsComponent,
    AboutFoodsComponent,
    MenuFoodComponent,
    ChefsComponent,
    ReservationComponent,
    BlogComponent,
    ReviewComponent,
    InfosComponent,
    ArticleComponent,
    BannerComponent,
    AdminComponent,
    UsersTableComponent,
    PlatsTableComponent,
    ChefsTableComponent,
    LigneChefComponent,
    ChefComponent,
    DashboardChefComponent,
    FastMenuComponent,
    SearchPlatsComponent,
    PlatInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule       // manuellement
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
