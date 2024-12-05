import { Component} from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductsService } from '../../services/products.service';
import { Observable , of} from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';
import { AppDataState, DataStateEnum } from '../../state/product.state';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  onAllProducts() {
    this.products$ = this.productsService.getAllProducts().pipe(
      map(data => {
        console.log(data);
        return { dataState: DataStateEnum.LOADED, data: data };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err => of({ dataState: DataStateEnum.ERROR, errorMessage: err.message }))
    );
  }  
  products$: Observable<AppDataState<Product[]>> | null = null;
  readonly DataStateEnum = DataStateEnum;

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.onGetAllProducts();
  }

  onGetAllProducts(): void {
    this.products$ = this.productsService.getAllProducts().pipe(
      map(data => {
        console.log(data);
        return { dataState: DataStateEnum.LOADED, data: data };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
      )
    );
  }

  onGetSelectedProducts(): void {
    this.products$ = this.productsService.getSelectedProducts().pipe(
      map(data => {
        console.log(data);
        return { dataState: DataStateEnum.LOADED, data: data };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
      )
    );
  }

  onGetAvailableProducts(): void {
    this.products$ = this.productsService.getAvailableProducts().pipe(
      map(data => {
        console.log(data);
        return { dataState: DataStateEnum.LOADED, data: data };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
      )
    );
  }

  onSearch(dataForm: any): void {
    this.products$ = this.productsService.searchProducts(dataForm.keyword).pipe(
      map(data => {
        console.log(data);
        return { dataState: DataStateEnum.LOADED, data: data };
      }),
      startWith({ dataState: DataStateEnum.LOADING }),
      catchError(err =>
        of({ dataState: DataStateEnum.ERROR, errorMessage: err.message })
      )
    );
  }

  onSelect(p: Product): void {
    this.productsService.select(p).subscribe(data => {
      p.selected = data.selected;
    });
  }

  onDelete(p: Product): void {
    const confirmDelete = confirm("Êtes-vous sûr?");
    if (confirmDelete) {
      this.productsService.deleteProduct(p).subscribe(() => {
        this.onGetAllProducts();
      });
    }
  }

  onNewProduct(): void {
    this.router.navigateByUrl("/newProduct");
  }
  onEdit(p: Product) {
    this.router.navigateByUrl("/editProduct/" + p.id);
  }
}
