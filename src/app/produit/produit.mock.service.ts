import { Produit } from "../shared/produit";

export class ProduitMockservice 
{
   private  PRODUITS: Produit[]=[] ;

       constructor(){

                    }
       
        public getProduits(): Produit[]
        {
            return this.PRODUITS ;
        }

  } 