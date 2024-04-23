import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Pest';
}
