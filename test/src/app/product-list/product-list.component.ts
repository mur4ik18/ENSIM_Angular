import { Component } from '@angular/core';
import { ProductCardComponent} from '../product-card/product-card.component';
import { Pcs } from '../pcs';
import { CommonModule } from '@angular/common';
import { PcFilterService } from '../pc-filter.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(public filtreService: PcFilterService) { 
  }
  public products: Pcs[] = this.filtreService.getAllPcs();
}
