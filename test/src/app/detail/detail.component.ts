import { Component, Input } from '@angular/core';
import {MatList, MatListItem, }from '@angular/material/list';
import {MatCard, MatCardTitle, MatCardHeader, MatCardContent}from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Pcs } from '../pcs';
import { PcFilterService } from '../pc-filter.service';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MatList, MatListItem, MatCard, MatCardTitle,MatCardHeader,MatCardContent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})

export class DetailComponent {
  constructor(public filtreService: PcFilterService, private route: ActivatedRoute) { 
  }
  pcs: Pcs = this.filtreService.getPcById(0);
}
