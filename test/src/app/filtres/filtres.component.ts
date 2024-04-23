import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
  selector: 'app-filtres',
  standalone: true,
  imports: [MatIconModule,MatButtonModule,MatToolbarModule],
  templateUrl: './filtres.component.html',
  styleUrl: './filtres.component.css'
})
export class FiltresComponent {

}
