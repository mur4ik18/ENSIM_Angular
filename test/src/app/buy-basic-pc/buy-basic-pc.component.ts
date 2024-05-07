import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-buy-basic-pc',
  standalone: true,
  imports: [RouterModule, ProductListComponent],
  templateUrl: './buy-basic-pc.component.html',
  styleUrl: './buy-basic-pc.component.css'
})
export class BuyBasicPcComponent {

}
