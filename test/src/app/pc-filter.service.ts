import { Injectable } from '@angular/core';
import { Pcs } from './pcs';
import * as Data from './data.json';


@Injectable({
  providedIn: 'root'
})
export class PcFilterService {
  data: any = Data;
  PcList: Pcs[] = this.data.default;



  getAllPcs(): Pcs[] {
    return this.PcList;
  }

  public getPcById(id: number): Pcs {
    let k = this.PcList.find(h => h.id == id); // Use non-null assertion operator
    console.log('Pc not found');
    console.log('id: ' + id);
    if (k === undefined) {
      
      throw new Error('Pc not found');
    }
    return k;
  }
  constructor() { }
}
