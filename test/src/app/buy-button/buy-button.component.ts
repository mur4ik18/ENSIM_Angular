import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-buy-button',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule],
  templateUrl: './buy-button.component.html',
  styleUrl: './buy-button.component.css'
})
export class BuyButtonComponent {

}
