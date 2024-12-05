import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-panier',
  template: `
    <h2>Your Panier</h2>
    <div *ngIf="products.length > 0; else emptyPanier">
      <div *ngFor="let product of products">
        <p>{{ product.name }} - {{ product.price }}€</p>
      </div>
      <button (click)="buyProducts()">Buy</button>
    </div>
    <ng-template #emptyPanier>
      <p>Your panier is empty.</p>
    </ng-template>
    <p *ngIf="purchaseDone">{{ purchaseMessage }}</p>
  `
})
export class PanierComponent implements OnInit {
  products: Product[] = [];
  purchaseDone = false;
  purchaseMessage = "Purchase successful! Thank you.";

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.loadSelectedProducts();
  }

  loadSelectedProducts(): void {
    this.productService.getSelectedProducts().subscribe({
      next: (products) => (this.products = products),
      error: (err) => console.error('Error loading selected products:', err),
    });
  }

  buyProducts(): void {
    if (this.products.length > 0) {
      this.purchaseDone = true;

      // Clear selected products after purchase
      this.clearPanier();
    }
  }

  clearPanier(): void {
    this.products.forEach(product => {
      this.productService.select(product).subscribe({
        next: () => {
          this.loadSelectedProducts(); // Refresh the list
        },
        error: (err) => console.error('Error clearing panier:', err),
      });
    });
  }
}
