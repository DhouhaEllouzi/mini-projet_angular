import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})


export class NavBarComponent {
  constructor(private router: Router) { }

Products() {
  this.router.navigate(['/products']);
}
Home() {
  this.router.navigate(['/']);
}
Panier() {
  this.router.navigate(['/panier']);
}
}
