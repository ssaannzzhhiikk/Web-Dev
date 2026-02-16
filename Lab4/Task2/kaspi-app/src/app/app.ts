import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { productCard } from './components/product-card/product-card.component';
import { productList } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, productList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('kaspi-app');
}
