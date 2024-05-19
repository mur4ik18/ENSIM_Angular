import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';
import { FiltresAdvancedComponent } from '../filtres-advanced/filtres-advanced.component';

@Component({
  selector: 'app-buy-advanced-pc',
  standalone: true, // Indicates that this component is standalone and not used as a child component
  imports: [RouterModule, ProductListComponent, FiltresAdvancedComponent], // Importing required modules and components
  templateUrl: './buy-advanced-pc.component.html', // Template file for the component
  styleUrl: './buy-advanced-pc.component.css' // Stylesheet file for the component
})
export class BuyAdvancedPcComponent {
  // No additional code in the class
}
