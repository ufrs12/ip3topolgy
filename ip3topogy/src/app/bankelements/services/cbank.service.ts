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

    this.cbank[1] = new Elem;
    this.cbank[1] = {
      name: 'wire',
      nnames: [],
      svg: '<rect width="100" height="100" fill="#cba3e1"></rect>'
    }

    this.cbank[2] = new Elem;
    this.cbank[2] = {
      name: 'consumer',
      nnames: ['Consumer'],
      svg: '<rect width="100" height="100" fill="#ffcc33"></rect>'
    }
  }
}
