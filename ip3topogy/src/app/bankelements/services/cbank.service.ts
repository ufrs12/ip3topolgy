import { Injectable } from '@angular/core';
import { Elem } from '../models/element';

@Injectable({
  providedIn: 'root'
})
export class CbankService {
  cbank:Elem[] = [];
  constructor() { 
    this.cbank[0] = new Elem;
    this.cbank[0] = {
      name: 'auto',
      nnames: ['Auto 1P', 'Auto 2P', 'Auto 3P'],
      svg: '<rect width="100" height="100" fill="#25A6FF"></rect>'
    }
  }
}
