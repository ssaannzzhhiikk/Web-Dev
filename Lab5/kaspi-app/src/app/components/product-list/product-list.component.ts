import { Component, input, OnChanges } from "@angular/core";
import { productModel } from "../../model/product.model";
import { productCard } from "../product-card/product-card.component";

@Component({
    selector: 'prod-list',
    imports: [productCard],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class productList implements OnChanges {
    readonly products = input.required<productModel[]>();
    displayProducts: productModel[] = [];

    ngOnChanges() {
        this.displayProducts = [...this.products()];
    }

    onDelete(productId: number): void {
        this.displayProducts = this.displayProducts.filter(p => p.id !== productId);
    }
}