import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../model/product.model';
import { AppDataState, DataStateEnum } from '../../state/product.state';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  standalone: true,
  imports: [CommonModule , FormsModule],
})
export class PanierComponent implements OnInit {
  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;
  selectedProducts: Product[] = [];
  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.onGetSelectedProducts();
  }

  onGetSelectedProducts(): void {
    this.products$ = this.productsService.getSelectedProducts().pipe(
      map(data => {
        console.log(data);
        this.selectedProducts = data || []; // Ensure selectedProducts is not null
        return { dataState: DataStateEnum.LOADED, data: data };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
      )
    );
  }

  
}
