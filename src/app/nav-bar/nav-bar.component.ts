import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { Observable , of} from 'rxjs';
import { AppDataState, DataStateEnum } from '../state/product.state';
import { Product } from '../model/product.model';
import { catchError, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  providers: [ProductsService]
})


export class NavBarComponent {
  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;
  constructor(private router: Router, private productsService: ProductsService) { }
Products() {
  this.router.navigate(['/products']);
}
Home() {
  this.router.navigate(['/']);
}
Panier() {
  this.router.navigate(['/panier']);
}
onGetSelectedProducts(): void {
  console.log('onGetSelectedProducts called');
  this.products$ = this.productsService.getSelectedProducts().pipe(
    map(data => {
      console.log('Fetched selected products:', data);
      return { dataState: DataStateEnum.LOADED, data: data };
    }),
    startWith({ dataState: DataStateEnum.LOADING }),
    catchError(err => {
      console.error('Error fetching selected products:', err);
      return of({ dataState: DataStateEnum.ERROR, errorMessage: err.message });
    })
  );

  // Subscribe to the observable to trigger the HTTP request
  this.products$.subscribe(
    result => console.log('Subscription result:', result),
    error => console.error('Subscription error:', error)
  );
}
handleChartClick(event: Event): void {
  event.preventDefault(); // Prevent the default navigation behavior
  this.onGetSelectedProducts(); // Call the function to get selected products
  this.Panier(); // Navigate to the panier route
}
}