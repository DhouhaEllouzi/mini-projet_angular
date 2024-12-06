import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  // Données des produits
  products = [
    {
      "id": "1",
      "name": "Vitamin C Tablets",
      "price": 15.99,
      "quantity": 200,
      "selected": true,
      "available": true
    },
    {
      "id": "2",
      "name": "Moisturizing Cream",
      "price": 8.99,
      "quantity": 120,
      "selected": true,
      "available": true
    },
    {
      "id": "3",
      "name": "Sunscreen SPF 50",
      "price": 12.5,
      "quantity": 80,
      "selected": true,
      "available": true
    },
    {
      "id": "4",
      "name": "Herbal Shampoo",
      "price": 10.25,
      "quantity": 50,
      "selected": true,
      "available": true
    },
    {
      "id": "5",
      "name": "Antiseptic Wipes",
      "price": 5.99,
      "quantity": 300,
      "selected": false,
      "available": true
    },
    {
      "id": "6",
      "name": "Pain Relief Gel",
      "price": 6.75,
      "quantity": 60,
      "selected": false,
      "available": true
    },
    {
      "id": "7",
      "name": "Baby Lotion",
      "price": 9.5,
      "quantity": 40,
      "selected": true,
      "available": true
    },
    {
      "id": "8",
      "name": "Probiotic Capsules",
      "price": 18.99,
      "quantity": 25,
      "selected": true,
      "available": true
    },
    {
      "id": "9",
      "name": "Allergy Relief Tablets",
      "price": 14.99,
      "quantity": 100,
      "selected": false,
      "available": true
    },
    {
      "id": "10",
      "name": "Lip Balm",
      "price": 3.5,
      "quantity": 150,
      "selected": false,
      "available": true
    }
  ];

  // Ajouter au panier
  cart: any[] = [];

  addToCart(product: any): void {
    if (product.available) {
      this.cart.push(product);
      alert(`${product.name} has been added to your cart.`);
    } else {
      alert(`${product.name} is not available right now.`);
    }
  }
}
