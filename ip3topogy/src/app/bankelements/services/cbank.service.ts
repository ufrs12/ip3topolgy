import { Injectable } from '@angular/core';
import { Nod } from 'src/app/models/node';
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
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,100.466 V 49.874316" id="path8542" sodipodi:nodetypes="cc" /><path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,0.68389843 V 21.282" id="path8544" sodipodi:nodetypes="cc" /><path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,49.874315 54.290322,23.064516" id="path8600" sodipodi:nodetypes="cc" /> <path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="m 57.974814,30.836585 -5.081999,2.527991 6.10751,12.706334 4.937526,-2.655893" id="path15417" sodipodi:nodetypes="cccc" />',
      tx1: 10,
      ty1: 20,
      text1: 'QF888',
    }

    this.cbank[1] = new Elem;
    this.cbank[1] = {
      name: 'wire',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,100 V 0.13264933" id="path8542" sodipodi:nodetypes="cc" />'
    }

    this.cbank[2] = new Elem;
    this.cbank[2] = {
      name: 'consumer',
      nnames: ['Consumer'],
      svg: '<rect width="100" height="100" fill="#ffcc33"></rect>'
    }

    this.cbank[3] = new Elem;
    this.cbank[3] = {
      name: 'busL',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.9563;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.969231" d="M 1.4566208,41.0937 H 100.543379" id="path8591" />'
    }
    this.cbank[4] = new Elem;
    this.cbank[4] = {
      name: 'busN',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.9563;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.969231" d="M 1.4566208,41.0937 H 100.543379" id="path8591" />'
    }

    this.cbank[5] = new Elem;
    this.cbank[5] = {
      name: 'motor',
      nnames: ['Motor 1L', 'Motor 3L'],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 68.1085,1.2130651 68.31762,21.28209" id="path8544" sodipodi:nodetypes="cc" /><circle style="fill:none;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:5.1" id="path6094" cx="68.317619" cy="43.175556" r="21.893467" /><path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:1" d="m 59.79032,50 0.17742,-15.225808 9.45838,8.401364 8.638394,-8.401365 L 78.241933,50" id="path7051" sodipodi:nodetypes="ccccc" />',
      tx1: 10,
      ty1: 20,
    }
  }
}
