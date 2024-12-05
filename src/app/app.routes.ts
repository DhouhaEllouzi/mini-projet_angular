import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { HomeComponent } from './components/home/home.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { PanierComponent } from './components/panier/panier.component';

export const routes: Routes = [
    {path:"products", component: ProductsComponent},
    {path:"", component: HomeComponent},
    {path:"newProduct", component:ProductAddComponent},
    {path:"editProduct/:id", component:ProductEditComponent},
    {path:"panier", component:PanierComponent}
];
