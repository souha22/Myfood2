import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ListUserComponent } from './list-user/list-user.component';
import {HttpClientModule} from '@angular/common/http';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { DetailUserComponent } from './detail-user/detail-user.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ActiviteComponent } from './activite/activite.component';
import { HomeActiviteComponent } from './home-activite/home-activite.component';
import { FormActiviteComponent } from './form-activite/form-activite.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AccueilComponent } from './accueil/accueil.component';
import { ProduitComponent } from './produit/produit.component';
import { ListProduitComponent } from './list-produit/list-produit.component';
import { FormProduitComponent } from './form-produit/form-produit.component';
import { RecetteComponent } from './recette/recette.component';
import { FormRecetteComponent } from './form-recette/form-recette.component';
import { HomeRecetteComponent } from './home-recette/home-recette.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegistrationComponent,
    ListUserComponent,
    DetailUserComponent,
    ReclamationComponent,
    ActiviteComponent,
    HomeActiviteComponent,
    FormActiviteComponent,
    AccueilComponent,
    ProduitComponent,
    ListProduitComponent,
    FormProduitComponent,
    RecetteComponent,
    FormRecetteComponent,
    HomeRecetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
    IvyCarouselModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
