import { Produit } from '../shared/produit';
import { ProduitService } from './produit.service';
import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { API_URLS } from '../config/api.url.config';


@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  id: number | undefined; 
  produits: Produit[] | undefined;
  productForm: FormGroup = new FormGroup({});
  operation:string ='add';
  selectedProduit: Produit | undefined = undefined;

  constructor(private produitService: ProduitService ,private fb: FormBuilder){
  this.createForm();

  }

  createForm(){
    this.productForm = this.fb.group({
     
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    });
  }

  ngOnInit(){
    this. initProduit();
    this.loadProduits();
    

  }
  loadProduits() {
    this.produitService.getProduits().subscribe(
      data => {
        this.produits = data;
        console.log('Voici les produits :', this.produits);
      },
      error => {
        console.log('Il y a un problème :', error);
      },
      () => {
        console.log('Tous les produits ont été chargés avec succès.');
      }
    );
  }

  addProduit() {
    const  produit: Produit = this.productForm.value;
    this.produitService.addProduits(produit).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  updateProduit() {
    if (this.selectedProduit) {
      this.produitService.updateProduit(this.selectedProduit).subscribe(
        res => {
          this.initProduit();
          this.loadProduits();
        }
      );
    }
  }

 
  deleteProduit(id: number) {
  if (this.selectedProduit) {
    this.produitService.deleteProduit(id).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      },
      error => {
        // Gérer les erreurs de suppression
      }
    );
  }
}

  
  
  
  

  initProduit(){
    this.selectedProduit ;
    this.createForm();
  }
  
  
  
  

}
