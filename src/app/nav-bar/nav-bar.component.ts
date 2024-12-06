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
  ngOnInit(): void {
    // On initialise la navigation vers "All Products" par défaut
    this.router.navigate(['/']);
  }
Products() {
  this.router.navigate(['/products']);
}
Home() {
  this.router.navigate(['/']);
}

}
