import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId: number;
  productFormGroup?: FormGroup;
  submitted: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    private fb: FormBuilder
  ) {
    this.productId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productsService.getProduct(this.productId).subscribe(product => {
      this.productFormGroup = this.fb.group({
        id: [product.id, Validators.required],
        name: [product.name, Validators.required],
        price: [product.price, Validators.required],
        quantity: [product.quantity, Validators.required],
        selected: [product.selected],
        available: [product.available]
      });
    });
  }

  onUpdateProduct(): void {
    this.submitted = true;
    if (this.productFormGroup?.invalid) return;

    this.productsService.updateProduct(this.productFormGroup?.value).subscribe(() => {
      alert('Product updated successfully');
    });
  }
}
