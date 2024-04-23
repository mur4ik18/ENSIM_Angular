import { Component, Input } from '@angular/core';
import { MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardImage, MatCardTitle, MatCardHeader } from '@angular/material/card';
import { Pcs } from '../pcs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule,MatCard, MatCardActions, MatCardContent, MatCardSubtitle, MatCardImage, MatCardTitle, MatCardHeader],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})

export class ProductCardComponent {
  @Input() pcs: Pcs;
}
