import { Injectable } from '@angular/core';
import { Nod } from 'src/app/models/node';
import { Elem } from '../models/element';

@Injectable({
  providedIn: 'root'
})
export class CbankService {
  cbank:Elem[] = [];
  constructor() { 

    this.cbank.push({
      name: 'wire',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,100 V 0.13264933" id="path8542" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({
      name: 'wireN',
      nnames: [],
      svg: '<path style="fill:none;stroke:#1f2607;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.992701" d="M 80.872437,0.59174242 80.855377,99.834371" id="path2252" />'
    })

    this.cbank.push({
      name: 'wireNdown',
      nnames: [],
      svg: '<path style="fill:none;stroke:#1f2607;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.992701" d="M 67,79.999998 80.855377,99.834373" id="path2160" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({
      name: 'wireNup',
      nnames: [],
      svg: '<path style="fill:none;stroke:#1f2607;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.992701" d="M 67.017131,20.426117 80.872438,0.59174243" id="path2160-2" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({
      name: 'wirePE',
      nnames: [],
      svg: '<path style="fill:none;stroke:#1f2607;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:4.5;stroke-opacity:0.992701;stroke-dashoffset:0" d="M 89.470832,99.470831 89.48785,0.95528243" id="path2254" />'
    })

    this.cbank.push({
      name: 'wirePEdown',
      nnames: [],
      svg: '<path style="fill:none;stroke:#1f2607;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:4.5;stroke-dashoffset:5.0999999;stroke-opacity:0.992701" d="M 89.470833,99.470833 67,80" id="path1956" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({
      name: 'wirePEup',
      nnames: [],
      svg: '<path style="fill:none;stroke:#1f2607;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:4.5;stroke-dashoffset:5.0999999;stroke-opacity:0.992701" d="M 89.48785,0.95528243 67.017131,20.426115" id="path1956-5" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({
      name: 'motor',
      nnames: ['Motor 1L', 'Motor 3L'],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,1.2130651 67,21.28209" id="path8544" sodipodi:nodetypes="cc" /><circle style="fill:none;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:5.1" id="path6094" cx="68.317619" cy="43.175556" r="21.893467" /><path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:1" d="m 59.79032,50 0.17742,-15.225808 9.45838,8.401364 8.638394,-8.401365 L 78.241933,50" id="path7051" sodipodi:nodetypes="ccccc" />',
      tx1: 10,
      ty1: 20,
    })

    this.cbank.push({
      name: 'auto',
      nnames: ['Auto 1P', 'Auto 2P', 'Auto 3P'],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,100.466 V 49.874316" id="path8542" sodipodi:nodetypes="cc" /><path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,0.68389843 V 21.282" id="path8544" sodipodi:nodetypes="cc" /><path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,49.874315 54.290322,23.064516" id="path8600" sodipodi:nodetypes="cc" /> <path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="m 57.974814,30.836585 -5.081999,2.527991 6.10751,12.706334 4.937526,-2.655893" id="path15417" sodipodi:nodetypes="cccc" />',
      tx1: 10,
      ty1: 20,
      text1: 'QF888',
    })

    this.cbank.push({
      name: 'consumer',
      nnames: ['Consumer'],
      svg: '<rect width="100" height="100" fill="#ffcc33"></rect>'
    })
//Шина
    this.cbank.push({
      name: 'busL',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.9563;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.969231" d="M 1.4566208,41.0937 H 100.543379" id="path8591" />'
    })

    this.cbank.push({
      name: 'busN',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.969231" d="M 1.6336237,48.638357 H 101" id="path8591-9" />'
    })

    this.cbank.push({
      name: 'busPE',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:7.19999981;stroke-dashoffset:0;stroke-opacity:0.969231" d="M 1.4566203,55.604864 H 98.543379" id="path8591-9-3" />'
    })
    this.cbank.push({
      name: 'busPE',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:7.19999981;stroke-dashoffset:0;stroke-opacity:0.969231" d="M 1.4566203,55.604864 H 98.543379" id="path8591-9-3" />'
    })
    this.cbank.push({
      name: 'busLd',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 16.999999,41.199338 V 100.14515" id="path8542" sodipodi:nodetypes="cc" /><circle style="fill:#1f2607;fill-opacity:0.968627;stroke:none;stroke-width:1.01536;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:3.04608;stroke-dashoffset:3.45222;stroke-opacity:0.992701" id="path5891" cx="17" cy="41.0937" r="3" />'
    })

    this.cbank.push({
      name: 'busLu',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 66.999999,41.199338 V 0.66181593" id="path8542" sodipodi:nodetypes="cc" /><circle style="fill:#1f2607;fill-opacity:0.968627;stroke:none;stroke-width:1.01536;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:3.04608;stroke-dashoffset:3.45222;stroke-opacity:0.992701" id="path5891" cx="67" cy="41.0937" r="3" />'
    })

    this.cbank.push({
      name: 'busNd',
      nnames: [],
      svg: '<path style="fill:none;stroke:#1f2607;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.992701" d="m 30.867549,99.704167 -0.0171,-51.040704" id="path2252" sodipodi:nodetypes="cc" /><circle style="fill:#1f2607;fill-opacity:0.968627;stroke:none;stroke-width:1.01536;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:3.04608;stroke-dashoffset:3.45222;stroke-opacity:0.992701" id="path5891-9" cx="30.858999" cy="48.638283" r="3" />'
    })

    this.cbank.push({
      name: 'busNu',
      nnames: [],
      svg: '<path style="fill:none;stroke:#1f2607;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.992701" d="M 80.8671,0.75 80.85,48.663463" id="path2252" sodipodi:nodetypes="cc" /><circle style="fill:#1f2607;fill-opacity:0.968627;stroke:none;stroke-width:1.01536;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:3.04608;stroke-dashoffset:3.45222;stroke-opacity:0.992701" id="path5891-9" cx="80.858551" cy="48.638283" r="3" />'
    })

    this.cbank.push({
      name: 'busPEd',
      nnames: [],
      svg: '<path style="fill:none;stroke:#1f2607;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:4.5;stroke-dashoffset:0;stroke-opacity:0.992701" d="m 39.450489,59.653046 0.01702,44.359454" id="path2254" sodipodi:nodetypes="cc" /><circle style="fill:#1f2607;fill-opacity:0.968627;stroke:none;stroke-width:1.01536;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:3.04608;stroke-dashoffset:3.45222;stroke-opacity:0.992701" id="path5891-9-7" cx="39.459" cy="55.604862" r="3" />'
    })

    this.cbank.push({
      name: 'busPEu',
      nnames: [],
      svg: '<path style="fill:none;stroke:#1f2607;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:4.5;stroke-dashoffset:0;stroke-opacity:0.992701" d="M 89.45,55.653046 89.46702,0" id="path2254" sodipodi:nodetypes="cc" /><circle style="fill:#1f2607;fill-opacity:0.968627;stroke:none;stroke-width:1.01536;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:3.04608;stroke-dashoffset:3.45222;stroke-opacity:0.992701" id="path5891-9-7" cx="89.458511" cy="55.604862" r="3" />'
    })
  }
}
