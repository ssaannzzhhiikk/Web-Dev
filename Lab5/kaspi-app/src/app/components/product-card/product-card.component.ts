import { Component, input } from "@angular/core";
import { productModel } from "../../model/product.model";

@Component({
    selector: 'prod-card',
    
    imports: [],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css'
})
export class productCard{
    readonly product = input.required<productModel>();
    readonly Math = Math; 

    shareWhatsApp(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        const message = `Check out this product: ${this.product().link}`;
        const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    }

    shareTelegram(event: Event): void {
        event.preventDefault();
        event.stopPropagation();
        const url = this.product().link;
        const text = this.product().name;
        const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        window.open(shareUrl, '_blank');
    }
}