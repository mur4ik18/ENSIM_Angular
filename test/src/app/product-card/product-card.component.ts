import { Component } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardImage, MatCardTitle, MatCardHeader } from '@angular/material/card';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardImage, MatCardTitle, MatCardHeader],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {

}
