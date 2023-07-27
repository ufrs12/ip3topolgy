import { Injectable } from '@angular/core';
import { Nod } from 'src/app/models/node';
import { Elem } from '../models/element';

@Injectable({
  providedIn: 'root'
})
export class CbankService {
  cbank:Elem[] = [];
  //Проводники
  wlw:number = 2.217; //толщина фазного провода
  wpx:number = 92;    //дальность защитного проводника
  wlx:number = 67;    //дальность основного проводника
  //Цвета
  cl:string = '1f2607'; //цвет основного провода
  cn:string = '00a2ff'; //цвет нулевых проводников
  cp:string = '03b000'; //цвет цвет защитных проводников
  //Шина
  blw:number = 3; //толщина фазной шины
  bly:number = 37; //высота расположения фазной шины
  bpy:number = 59; //высота расположения защитной шины

  constructor() { 
    //Проводники
    this.cbank.push({ //основной провод
      name: 'wire',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:'+this.wlw+';stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M '+this.wlx+',100 V 0.13264933" id="path8542" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({ //маркировка одной фазы основном проводе
      name: 'wireML',
      nnames: [],
      svg: '<path style="fill:#none;fill-opacity:0.968627;stroke:#'+this.cl+';stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.968627" d="M 60.398575,49.98961 73.601424,44.229808" id="path2310-3" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({ //маркировка двух фаз основном проводе
      name: 'wireMLL',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:0.968627;stroke:#'+this.cn+';stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.968627" d="M 60.398575,49.98961 73.601424,44.229808" id="path2310-3" sodipodi:nodetypes="cc" /><path style="fill:none;fill-opacity:0.968627;stroke:#'+this.cn+';stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.968627" d="M 60.398575,43.745083 73.601424,37.985281" id="path2310-3-7" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({ //маркировка трех фаз основном проводе
      name: 'wireMLLL',
      nnames: [],
      svg: '<path style="fill:#1f2607;fill-opacity:0.968627;stroke:#1f2607;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.968627" d="M 60.398575,49.98961 73.601424,44.229808" id="path2310-3" sodipodi:nodetypes="cc" /><path style="fill:#1f2607;fill-opacity:0.968627;stroke:#1f2607;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.968627" d="M 60.398575,37.364167 73.601424,31.604365" id="path2310-3-9" sodipodi:nodetypes="cc" /><path style="fill:#1f2607;fill-opacity:0.968627;stroke:#1f2607;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.968627" d="M 60.398575,43.745083 73.601424,37.985281" id="path2310-3-7" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({ //маркировка нуля в основном проводе
      name: 'wireMN',
      nnames: [],
      svg: '<text x="48" y="60" style="font: italic 11px sans-serif; fill:#'+this.cn+';">N</text><path style="fill:none;fill-opacity:0.968627;stroke:#'+this.cn+';stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.96862745" d="M 60.398575,56.460546 73.601424,50.700744" id="path2310-3-4" sodipodi:nodetypes="cc" /><circle style="fill:#'+this.cn+';fill-opacity:0.968627;stroke:none;stroke-width:1.90628;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:1" id="path2682" cx="61.883755" cy="55.955696" r="2.5" />'
    })

    this.cbank.push({ //маркировка защитного в основном проводе
      name: 'wireMPE',
      nnames: [],
      svg: '<text x="43" y="69" style="font: italic 11px sans-serif; fill:#'+this.cp+';">PE</text><path style="fill:none;fill-opacity:0.968627;stroke:#'+this.cp+';stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.96862745" d="M 60.398575,64.020348 73.601424,58.260546" id="path2310-3-4-5" sodipodi:nodetypes="cc" /><path style="fill:none;fill-opacity:0.968627;stroke:#'+this.cp+';stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.968627" d="M 60.398575,66.747704 60.36694,60.916427" id="path2738" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({
      name: 'wireN',
      nnames: [],
      svg: '<path style="fill:none;stroke:#'+this.cn+';stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.992701" d="M 80.872437,0.59174242 80.855377,99.834371" id="path2252" />'
    })

    this.cbank.push({
      name: 'wireNdown',
      nnames: [],
      svg: '<path style="fill:none;stroke:#'+this.cn+';stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.992701" d="M 67,79.999998 80.855377,99.834373" id="path2160" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({
      name: 'wireNup',
      nnames: [],
      svg: '<path style="fill:none;stroke:#'+this.cn+';stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.992701" d="M 67.017131,20.426117 80.872438,0.59174243" id="path2160-2" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({
      name: 'wirePE',
      nnames: [],
      svg: '<path style="fill:none;stroke:#'+this.cp+';stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:4.5;stroke-opacity:0.992701;stroke-dashoffset:0" d="M '+this.wpx+',100 '+this.wpx+',0" id="path2254" />'
    })

    this.cbank.push({
      name: 'wirePEdown',
      nnames: [],
      svg: '<path style="fill:none;stroke:#'+this.cp+';stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:4.5;stroke-dashoffset:5.0999999;stroke-opacity:0.992701" d="M '+this.wpx+',100 '+(this.wlx+1)+',80" id="path1956" sodipodi:nodetypes="cc" />'
    })

    this.cbank.push({
      name: 'wirePEup',
      nnames: [],
      svg: '<path style="fill:none;stroke:#'+this.cp+';stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:4.5;stroke-dashoffset:5.0999999;stroke-opacity:0.992701" d="M '+this.wpx+',0 '+(this.wlx+1)+',20" id="path1956-5" sodipodi:nodetypes="cc" />'
    })
  
//Шины
    this.cbank.push({
      name: 'busL',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:'+this.blw+';stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.969231" d="M 0,'+this.bly+' H 100" id="path8591" />'
    })

    this.cbank.push({
      name: 'busN',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#'+this.cn+';stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:0.969231" d="M 0,48.638357 H 100" id="path8591-9" />'
    })

    this.cbank.push({
      name: 'busPE',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#'+this.cp+';stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:7.19999981;stroke-dashoffset:0;stroke-opacity:0.969231" d="M 0,'+this.bpy+' H 100" id="path8591-9-3" />'
    })

    this.cbank.push({
      name: 'busLd',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 16.999999,'+this.bly+' V 100.14515" id="path8542" sodipodi:nodetypes="cc" /><circle style="fill:#1f2607;fill-opacity:0.968627;stroke:none;stroke-width:1.01536;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:3.04608;stroke-dashoffset:3.45222;stroke-opacity:0.992701" id="path5891" cx="17" cy="'+this.bly+'" r="3" />'
    })

    this.cbank.push({
      name: 'busLu',
      nnames: [],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 66.999999,'+this.bly+' V 0.66181593" id="path8542" sodipodi:nodetypes="cc" /><circle style="fill:#1f2607;fill-opacity:0.968627;stroke:none;stroke-width:1.01536;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:3.04608;stroke-dashoffset:3.45222;stroke-opacity:0.992701" id="path5891" cx="67" cy="'+this.bly+'" r="3" />'
    })

    this.cbank.push({
      name: 'busNd',
      nnames: [],
      svg: '<path style="fill:none;stroke:#'+this.cn+';stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.992701" d="m 30.867549,99.704167 -0.0171,-51.040704" id="path2252" sodipodi:nodetypes="cc" /><circle style="fill:#'+this.cn+';fill-opacity:0.968627;stroke:none;stroke-width:1.01536;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:3.04608;stroke-dashoffset:3.45222;stroke-opacity:0.992701" id="path5891-9" cx="30.858999" cy="48.638283" r="3" />'
    })

    this.cbank.push({
      name: 'busNu',
      nnames: [],
      svg: '<path style="fill:none;stroke:#'+this.cn+';stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:0.992701" d="M 80.8671,0.75 80.85,48.663463" id="path2252" sodipodi:nodetypes="cc" /><circle style="fill:#'+this.cn+';fill-opacity:0.968627;stroke:none;stroke-width:1.01536;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:3.04608;stroke-dashoffset:3.45222;stroke-opacity:0.992701" id="path5891-9" cx="80.858551" cy="48.638283" r="3" />'
    })

    this.cbank.push({
      name: 'busPEd',
      nnames: [],
      svg: '<path style="fill:none;stroke:#'+this.cp+';stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:4.5;stroke-dashoffset:0;stroke-opacity:0.992701" d="m '+(this.wpx-50)+','+(this.bpy+1)+' 0,44.359454" id="path2254" sodipodi:nodetypes="cc" /><circle style="fill:#'+this.cp+';fill-opacity:0.968627;stroke:none;stroke-width:1.01536;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:3.04608;stroke-dashoffset:3.45222;stroke-opacity:0.992701" id="path5891-9-7" cx="'+(this.wpx-50)+'" cy="'+this.bpy+'" r="3" />'
    })

    this.cbank.push({
      name: 'busPEu',
      nnames: [],
      svg: '<path style="fill:none;stroke:#'+this.cp+';stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:4.5;stroke-dashoffset:0;stroke-opacity:0.992701" d="M '+this.wpx+','+(this.bpy-3)+' '+this.wpx+',0" id="path2254" sodipodi:nodetypes="cc" /><circle style="fill:#'+this.cp+';fill-opacity:0.968627;stroke:none;stroke-width:1.01536;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:3.04608;stroke-dashoffset:3.45222;stroke-opacity:0.992701" id="path5891-9-7" cx="'+this.wpx+'" cy="'+this.bpy+'" r="3" />'
    })
    //Ноды
    this.cbank.push({
      name: 'diff',
      nnames: ['Diff 2P', 'Diff 4P'],
      svg: '<ellipse style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:1.94326;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" id="path7755" cx="67" cy="59.5" rx="16.028372" ry="5.5283709" />'+
           '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="m 50,59.637772 h -9.835149 l 0.04436,-20.063517 15.914783,0.05478" id="path7760" sodipodi:nodetypes="cccc" />'+
           '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,100 V 50" id="path8542" sodipodi:nodetypes="cc" />'+
           '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,0 V 21" id="path8544" sodipodi:nodetypes="cc" />'+
           '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,50 54,23" id="path8600" sodipodi:nodetypes="cc" />'+
           '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 57,31 52.892815,33.364576 59.355164,45.893491 63.5,43.5" id="path15417" sodipodi:nodetypes="cccc" />'+
           '<path style="fill:none;fill-opacity:1;stroke:#db3f3b;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:1" d="m 64,19 6,5" id="path26995" sodipodi:nodetypes="cc" />'+
           '<path style="fill:none;fill-opacity:1;stroke:#db3f3b;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:1" d="m 70,19 -6,5" id="path26995-7" sodipodi:nodetypes="cc" />',
      tx1: 10,
      ty1: 20,
    })

    this.cbank.push({
      name: 'count',
      nnames: ['Counter 1P', 'Counter 4P'],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,100.466 V 49.874316" id="path8542" sodipodi:nodetypes="cc" />'+
           '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,0.68389843 V 21.282" id="path8544" sodipodi:nodetypes="cc" /><rect style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:1" id="rect30019" width="20.794313" height="27.495136" x="56.60284" y="22.102839" />'+
           '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:1" d="M 57,29 H 77" id="path30075" sodipodi:nodetypes="cc" />'+
           '<text xml:space="preserve" style="font-style:italic;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:11.2889px;font-family:Calibri;-inkscape-font-specification:"Calibri Bold Italic";text-align:justify;fill:#1f2607;fill-opacity:1;stroke:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:1" x="58.583858" y="41.399956" id="text30857">'+
           '<tspan sodipodi:role="line" id="tspan30855" style="font-style:italic;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:11.2889px;font-family:Calibri;-inkscape-font-specification:"Calibri Bold Italic";fill:#1f2607;fill-opacity:1;stroke:none;stroke-width:1.8;stroke-opacity:1" x="58.583858" y="41.399956">Wh</tspan></text>',
      tx1: 10,
      ty1: 20,
    })
    this.cbank.push({
      name: 'km',
      nnames: ['KM 1P', 'KM 3P'],
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,100 V 50" id="path8542" sodipodi:nodetypes="cc" />'+
           '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,0 V 21" id="path8544" sodipodi:nodetypes="cc" />' +
           '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,50 54.290322,23.064516" id="path8600" sodipodi:nodetypes="cc" />'+
           '<path style="fill:none;fill-opacity:0.968627;stroke:#1f2607;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dashoffset:19.2756;stroke-opacity:1" d="m 67,21 c -1.225516,0.04298 -2.4593,-0.484976 -3.274373,-1.40116 -0.815073,-0.916183 -1.195818,-2.203038 -1.010468,-3.415219 0.153347,-1.002888 0.685803,-1.943147 1.46697,-2.590509 C 64.963296,12.94575 65.986079,12.597165 67,12.632725" id="path24609" inkscape:path-effect="#path-effect24611" inkscape:original-d="M 67,21 C 64.881984,18.851169 64.833701,18.332981 62.715159,16.183621 60.596614,14.034261 64.881984,13.983894 67,12.632725" sodipodi:nodetypes="csc" />',
      tx1: 10,
      ty1: 20,
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
      svg: '<path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,100.466 V 49.874316" id="path8542" sodipodi:nodetypes="cc" /><path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,0.68389843 V 21.282" id="path8544" sodipodi:nodetypes="cc" /><path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="M 67,49.874315 54.290322,23.064516" id="path8600" sodipodi:nodetypes="cc" /> <path style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1" d="m 57.974814,30.836585 -5.081999,2.527991 6.10751,12.706334 4.937526,-2.655893" id="path15417" sodipodi:nodetypes="cccc" />'+
           '<path style="fill:none;fill-opacity:1;stroke:#db3f3b;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:1" d="m 64,19 6,5" id="path26995" sodipodi:nodetypes="cc" />'+
           '<path style="fill:none;fill-opacity:1;stroke:#db3f3b;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:1" d="m 70,19 -6,5" id="path26995-7" sodipodi:nodetypes="cc" />',
      tx1: 10,
      ty1: 20,
      text1: 'QF888',
    })

    this.cbank.push({
      name: 'consumer',
      nnames: ['Consumer'],
      svg: '<rect width="100" height="100" fill="#ffcc33"></rect>'
    })
  }
}
