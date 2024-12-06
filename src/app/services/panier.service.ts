// src/app/panier.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
@Injectable({
  providedIn: 'root'
})
export class PanierService {
  private panier: Product[] = [];

  constructor() { }

  // Ajouter un produit au panier
  ajouterAuPanier(produit: Product) {
    // Vérifier si le produit est disponible et sélectionner
    if (produit.available && produit.quantity > 0) {
      produit.selected = true;
      this.panier.push(produit);
    }
  }

  // Retourner la liste des produits dans le panier
  obtenirPanier() {
    return this.panier;
  }
}
