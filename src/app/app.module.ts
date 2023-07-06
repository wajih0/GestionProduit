import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitMockservice } from './produit/produit.mock.service';
import { Produit } from "./shared/produit";

@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProduitMockservice], // Fournir les services ici
  bootstrap: [AppComponent]
})
export class AppModule { }
