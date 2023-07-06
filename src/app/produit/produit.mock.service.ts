import { Produit } from "../shared/produit";

export class ProduitMockservice 
{
   private  PRODUITS: Produit[]=[] ;

       constructor(){
                            let p1: Produit = new Produit(1,'livre',50,77);
                            let p2: Produit = new Produit(2,'livre1',60,55);
                            let p3: Produit = new Produit(3,'livre2',580,40);
                            this.PRODUITS.push(p1);
                            this.PRODUITS.push(p2);
                            this.PRODUITS.push(p3);

                    }
       
        public getProduits(): Produit[]
        {
            return this.PRODUITS ;
        }

  }