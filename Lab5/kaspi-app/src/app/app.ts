import { Component } from '@angular/core';
import { productList } from './components/product-list/product-list.component';
import { ProductService } from './services/product.services';
import { categoryModel } from './model/category.model';
import { productModel } from './model/product.model';
import { UpperCasePipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [productList, UpperCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  categories: categoryModel[] = [];
  selectedCategoryId: number | null = null;
  filteredProducts: productModel[] = [];

constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.filteredProducts = this.productService.getProducts();
    this.selectedCategoryId = 0;
}

selectCategory(categoryId: number): void {
    this.selectedCategoryId = categoryId;
    if (categoryId === 0) {
        this.filteredProducts = this.productService.getProducts();
    } else {
        this.filteredProducts = this.productService.getProductsByCategory(categoryId);
    }
}

  isSelected(categoryId: number): boolean {
    return this.selectedCategoryId === categoryId;
  }
}