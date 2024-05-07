import { Injectable } from '@angular/core';
import { Pcs } from './pcs';

@Injectable({
  providedIn: 'root'
})
export class PcFilterService {
  protected PcList: Pcs[] = [
    {
      id: 0,
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
    },
    {
      id: 1,
      name: 'test1',
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
      prix: 1100
    },
    {
      id: 2,
      name: 'test2',
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
      prix: 500
    }
  ]

  getAllPcs(): Pcs[] {
    return this.PcList;
  }

  public getPcById(id: number): Pcs {
    let k = this.PcList.find(h => h.id === id); // Use non-null assertion operator
    if (k === undefined) {
      throw new Error('Pc not found');
    }
    return k;
  }
  constructor() { }
}
