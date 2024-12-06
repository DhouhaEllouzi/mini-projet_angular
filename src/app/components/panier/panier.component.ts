import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  @Input() cart: any[] = []; // Recevoir les données du panier depuis le composant parent

}
