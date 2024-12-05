import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productFormGroup: FormGroup = new FormGroup({});
  submitted: boolean = false;

  constructor(private fb: FormBuilder, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name: ['', Validators.required],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true],
      available: [true]
    });
  }

  onSaveProduct(): void {
    this.submitted = true;

    if (this.productFormGroup.invalid) return;

    this.productsService.save(this.productFormGroup?.value).subscribe({
      next: () => alert('Success saving product'),
      error: (err) => alert(`Error: ${err.message}`)
    });
  }
}
