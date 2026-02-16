import { Component } from "@angular/core";
import { productModel } from "../../model/product.model";
import { productCard } from "../product-card/product-card.component";


@Component({
    selector: 'prod-list',
    imports: [productCard],
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.css'
})
export class productList{
    products: productModel[] = [
    {
    id: 1,
    name: "Iphone Case",
    description: "Чехол для Apple iPhone 13 прозрачный",
    price: 70,
    rating: 5,
    image: "products/iphone-case.png",
    images: [],
    link: "https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000"
    },
    {
    id: 2,
    name: "TypeC cable",
    description: "Кабель VARIUM USB 4 Type-C (M), 1 м, VTT03 белый",
    price: 1950,
    rating: 4,
    image: "products/typec.jpg",
    images: [],
    link: "https://kaspi.kz/shop/p/kabel-varium-usb-4-type-c-m-1-m-vtt03-belyi-144182006/?c=750000000"
    },
       {
    id: 3,
    name: "Jasper Case",
    description: "Чехол JASPER для Apple iPhone 17 Pro прозрачный",
    price: 990,
    rating: 5,
    image: "products/iphone-case3.png",
    images: [],
    link: "https://kaspi.kz/shop/p/chehol-jasper-dlja-apple-iphone-17-pro-prozrachnyi-146498145/?c=750000000"
    },
       {
    id: 4,
    name: "case4",
    description: "Чехол для Apple iPhone 11 прозрачный",
    price: 10,
    rating: 3,
    image: "products/iphone-case4.png",
    images: [],
    link: "https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-11-prozrachnyi-103661424/?c=750000000"
    },
       {
    id: 5,
    name: "Case5",
    description: "Чехол для Apple iPhone 15 прозрачный",
    price: 146,
    rating: 5,
    image: "products/iphone-case5.png",
    images: [],
    link: "https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-15-prozrachnyi-113282830/?c=750000000"
    },
       {
    id: 6,
    name: "Popsocket6",
    description: "Попсокет 002 розовый",
    price: 59,
    rating: 4,
    image: "products/popsocket6.png",
    images: [],
    link: "https://kaspi.kz/shop/p/popsoket-002-rozovyi-122283935/?c=750000000"
    },
       {
    id: 7,
    name: "Case7",
    description: "Чехол для Apple iPhone 14 прозрачный",
    price: 100,
    rating: 5,
    image: "products/iphone-case7.png",
    images: [],
    link: "https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-14-prozrachnyi-107664472/?c=750000000"
    },
       {
    id: 8,
    name: "Case8",
    description: "Чехол для Apple iPhone 13 прозрачный",
    price: 85,
    rating: 5,
    image: "products/iphone-case8.png",
    images: [],
    link: "https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-prozrachnyi-103428215/?c=750000000"
    },
       {
    id: 9,
    name: "Case9",
    description: "Чехол для Apple iPhone 15 Pro прозрачный",
    price: 110,
    rating: 5,
    image: "products/iphone-case9.png",
    images: [],
    link: "https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-15-pro-prozrachnyi-113282783/?c=750000000"
    },
       {
    id: 10,
    name: "Case10",
    description: "Чехол для Apple iPhone 15 Pro Max прозрачный",
    price: 100,
    rating: 5,
    image: "products/iphone-case10.png",
    images: [],
    link: "https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-15-pro-max-prozrachnyi-113308490/?c=750000000"
    },
       {
    id: 11,
    name: "Plug11",
    description: "Apple 20W USB-C Power Adapter белый",
    price: 1950,
    rating: 4,
    image: "products/iphone-case11.png",
    images: [],
    link: "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000"
    },
       {
    id: 12,
    name: "Popsocket12",
    description: "Попсокет Anker попсокет черный",
    price: 1950,
    rating: 4,
    image: "products/popsocket12.png",
    images: [],
    link: "https://kaspi.kz/shop/p/popsoket-anker-popsoket-chernyi-130061561/?c=750000000"
    },
  ];
}