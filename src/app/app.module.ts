import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChocolatComponent } from './components/chocolat/chocolat.component';
import { AjoutCakeComponent } from './components/ajout-cake/ajout-cake.component';
import { ListCakeComponent } from './components/list-cake/list-cake.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
   AppComponent,
   ChocolatComponent,
   AjoutCakeComponent,
   ListCakeComponent,
   NavbarComponent,
   NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
