import { Component, input, output, signal } from "@angular/core";
import { productModel } from "../../model/product.model";

@Component({
    selector: 'prod-card',
    imports: [],
    templateUrl: './product-card.component.html',
    styleUrl: './product-card.component.css'
})
export class productCard {
    readonly product = input.required<productModel>();
    readonly Math = Math;

    readonly deleteProduct = output<number>();

    likes = signal(0);
    liked = signal(false);

    ngOnInit() {
        this.likes.set(this.product().likes);
    }

    onLike(): void {
        this.likes.update(l => l + 1);
        this.liked.set(true);
    }

    onDelete(): void {
        this.deleteProduct.emit(this.product().id);
    }

    shareWhatsApp(): void {
    const message = `Check out this product: ${this.product().link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    }

    shareTelegram(): void {
        const url = this.product().link;
        const text = this.product().name;
        const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        window.open(shareUrl, '_blank');
    }
}

