import { Produit } from '../shared/produit';
import { ProduitMockservice } from './produit.mock.service';
import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits: Produit[] | undefined;
  constructor(private produitService: ProduitMockservice){

  }

  ngOnInit(){
    this.produits = this.produitService.getProduits();

  }

}
