import { HttpClient } from "@angular/common/http";
import { NONE_TYPE } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { API_URLS } from '../config/api.url.config';
import { Produit } from "../shared/produit";

@Injectable()
export class ProduitService {
  constructor(private http: HttpClient) {}

  getProduits(): Observable<any> {
    return this.http.get<Produit>(API_URLS.PRODUITS_URL);
  }



  addProduits(produit: Produit): Observable<any> {
    return this.http.post(API_URLS.PRODUITS_URL, produit);
  }
  

  updateProduit(produit: Produit): Observable<any> {
    const url = `${API_URLS.PRODUITS_URL}/${produit.id}`;
    return this.http.put(url, produit);
  }
  

  deleteProduit(id: number): Observable<any> {
    return this.http.delete(API_URLS.PRODUITS_URL + '/' + id);
  }
  


}
