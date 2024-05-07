import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { DetailComponent } from './detail/detail.component';
import { ProductListComponent } from './product-list/product-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, HeaderComponent, ProductListComponent, DetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Pest';
}
