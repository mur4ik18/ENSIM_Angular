import { Component } from '@angular/core';
import {MatList, MatListItem, }from '@angular/material/list';
import {MatCard, MatCardTitle, MatCardHeader, MatCardContent}from '@angular/material/card';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MatList, MatListItem, MatCard, MatCardTitle,MatCardHeader,MatCardContent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

export class DetailComponent {
  pc = {
    name: 'Mon PC',
    cpu: 'Intel Core i7',
    gpu: 'Nvidia GeForce RTX 3080',
    ram: '32GB DDR4',
    storage: '1TB SSD',
    price: '$2000'
  };
}
