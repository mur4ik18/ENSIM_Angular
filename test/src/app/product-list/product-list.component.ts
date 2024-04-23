import { Component } from '@angular/core';
import { ProductCardComponent} from '../product-card/product-card.component';
import { Pcs } from '../pcs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  pcs: Pcs = {
    name: 'test',
    marque: 'test',
    type: 'test',
    ecran: 'test',
    clavier: 'test',
    system: {
      ram: 0,
      cpu: {
        marque: 'test',
        nom: 'test',
        score: 0,
        core: 0,
        frequenceMax: 0,
        tdp: 0
      },
      hdd: {
        capacite: 0,
        type: 'test',
        rpm: 0,
        vitesseTransfert: 0
      },
      cg: {
        marque: 'test',
        modele: 'test',
        score: 0
      }
    },
    batterie: 'test',
    prix: 1000
  };
  products = [this.pcs, this.pcs, this.pcs, this.pcs];
}
