import { Injectable } from '@angular/core';
import { Nod } from 'src/app/models/node';
import { Elem } from '../models/element';

@Injectable({
  providedIn: 'root'
})
export class CbankService {
  gstyles = new Map();  //стили
  cbank:Elem[] = [];
  //Проводники
  wlw:number = 2.217;   //толщина фазного провода
  wnw:number = 1;       //толщина нулевого провода
  wpw:number = 1;       //толщина защитного провода
  wpx:number = 92;      //дальность защитного проводника
  wnx:number = 81;      //дальность нулувого проводника
  wlx:number = 67;      //дальность основного проводника
  //Маркировки проводников
  mlw:number = 1.8      //толщина маркировочных насечек
  //Цвета
  cl:string = '1f2607'; //цвет основного провода
  cn:string = '00a2ff'; //цвет нулевых проводников
  cp:string = '03b000'; //цвет цвет защитных проводников
  //Шина
  bly:number = 37;      //высота расположения фазной шины
  bny:number = 48;      //высота расположения нулевой шины
  bpy:number = 59;      //высота расположения защитной шины
  //Элементы
  uy:number = 21;       //верхняя точка разъединителя
  dy:number = 50;       //нижняя точка разъединителя

  constructor() { 
/////////////
//  Стили  //
/////////////
    //стили основных линий
    this.gstyles.set('path', new Object({
      'fill'              :'none',        //заливка
      'stroke'            :'#' + this.cl, //цвет обводки
      'stroke-width'      :this.wlw,      //толщина обводки
      'stroke-opacity'    :1,             //прозрачность обводки
      'stroke-linecap'    :'round',       //оформление концов обводки
      'stroke-dasharray'  :'none',        //штриховка обводки
      'stroke-linejoin'   :'round',       //оформление соединений обводки)
    }));
    //cтили окружностей
    this.gstyles.set('circle', new Object({
      'fill'              :'none',        //заливка
      'stroke'            :'#' + this.cl, //цвет обводки
      'stroke-width'      :this.wlw,      //толщина обводки
      'stroke-opacity'    :1,             //прозрачность обводки
    }));
    //cтили эллипсов
    this.gstyles.set('ellipse', new Object({
      'fill'              :'none',        //заливка
      'stroke'            :'#' + this.cl, //цвет обводки
      'stroke-width'      :this.wlw,      //толщина обводки
      'stroke-opacity'    :1,             //прозрачность обводки
    }));
    //cтили текстов
    this.gstyles.set('text', new Object({
      'font-style'        :'italic',      //наклон
      'font-weight'       :'bold',        //толщина
      'font-family'       :'Calibri',     //шрифт
      'text-align'        :'justify',     //выравнивание
      'stroke'            :'none',        //цвет обводки
    }));
    //cтили квадратов
    this.gstyles.set('rect', new Object({
      'fill'              :'none',        //заливка
      'stroke'            :'#' + this.cl, //цвет обводки
      'stroke-width'      :this.wlw,      //толщина обводки
      'stroke-opacity'    :1,             //прозрачность обводки
    }));


    //cтили текстов маркировки проводников
    this.gstyles.set('.mt', new Object({
      'font-size'         :12 + 'px',     //размер
      'stroke'            :'none',        //цвет обводки
      'font-weight'       :'normal',      //толщина
    }));
    //стили маркировки фазных насечек
    this.gstyles.set('.ml', new Object({
      'stroke-width'      :this.mlw,      //толщина обводки
    }));

    //cтили маркировки нулей
    this.gstyles.set('.mn', new Object({
      'fill'              :'#' + this.cn, //заливка
      'stroke'            :'#' + this.cn, //цвет обводки
      'stroke-width'      :this.mlw,      //толщина обводки
    }));
    //cтили текстов и окружностей(пимпочки) маркировки нулей
    this.gstyles.set('.cn', new Object({
      'fill'              :'#' + this.cn, //заливка
      'stroke'            :'none',        //цвет обводки
    }));
    //cтили маркировки нулевых насечек
    this.gstyles.set('.mn', new Object({
      'stroke'            :'#' + this.cn, //цвет обводки
      'stroke-width'      :this.mlw,      //толщина обводки
    }));
    //cтили текстов и окружностей(пимпочки) маркировки защитных проводов
    this.gstyles.set('.cp', new Object({
      'fill'              :'#' + this.cp, //заливка
      'stroke'            :'none',        //цвет обводки
    }));
    //cтили маркировки защитных насечек
    this.gstyles.set('.mp', new Object({
      'stroke'            :'#' + this.cp, //цвет обводки
      'stroke-width'      :this.mlw,      //толщина обводки
    }));
    //cтили маркировки нулевых проводов
    this.gstyles.set('.wn', new Object({
      'stroke'            :'#' + this.cn, //цвет обводки
      'stroke-width'      :this.wnw,      //толщина обводки
    }));
    //cтили маркировки защитных проводов
    this.gstyles.set('.wp', new Object({
      'stroke'            :'#' + this.cp, //цвет обводки
      'stroke-width'      :this.wpw,      //толщина обводки
      'stroke-dasharray'  :'4.5',         //штриховка
    }));
    //cтили фазной шины
    this.gstyles.set('.bl', new Object({
      'stroke-width'      :this.wlw * 1.5,//толщина обводки
    }));
    //cтили нулевой шины
    this.gstyles.set('.bn', new Object({
      'stroke-width'      :this.wnw * 1.5,//толщина обводки
      'stroke'            :'#' + this.cn, //цвет обводки
    }));
    //cтили защитной шины
    this.gstyles.set('.bp', new Object({
      'stroke-width'      :this.wpw * 1.5,//толщина обводки
      'stroke'            :'#' + this.cp, //цвет обводки
    }));
    //cтили контактных пятаков основонй шины
    this.gstyles.set('.bcl', new Object({
      'fill'              :'#' + this.cl, //заливка
      'stroke'            :'none',        //цвет обводки
    }));
////////////////
//  Элементы  //
////////////////

    this.cbank.push({ //основной провод
      name: 'wire',
      nnames: [],
      svg: '<path d="M '+this.wlx+',100 V 0"/>'
    })
    //Маркировки проводников
    this.cbank.push({ //маркировка одной фазы основном проводе
      name: 'wireML',
      nnames: [],
      svg: '<path class="ml" d="M 60.4,50 73.6,44.23"/>'
    })

    this.cbank.push({ //маркировка двух фаз основном проводе
      name: 'wireMLL',
      nnames: [],
      svg: 
        '<path class="ml" d="M 60.4,50 73.6,44.23"/>'+
        '<path class="ml" d="M 60.4,43.745 73.6,37.985"/>'
    })

    this.cbank.push({ //маркировка трех фаз основном проводе
      name: 'wireMLLL',
      nnames: [],
      svg: 
        '<path class="ml" d="M 60.4,50 73.6,44.23"/>'+
        '<path class="ml" d="M 60.4,37.364 73.6,31.6"/>'+
        '<path class="ml" d="M 60.4,43.745 73.6,37.985"/>'
    })

    this.cbank.push({ //маркировка нуля в основном проводе
      name: 'wireMN',
      nnames: [],
      svg: 
        '<text x="48" y="60" class="mt cn">N</text>'+
        '<path class="ml mn" d="M 60.34,56.46 73.6,50.7"/>'+
        '<circle class="cn" cx="61.883755" cy="55.955696" r="2.5"/>'
    })

    this.cbank.push({ //маркировка защитного в основном проводе
      name: 'wireMPE',
      nnames: [],
      svg: 
        '<text x="43" y="69" class="mt cp">PE</text>'+
        '<path class="ml mp" d="M 60.4,64 73.6,58.26"/>'+
        '<path class="ml mp" d="M 60.4,66.75 60.37,60.92"/>'
    })

    this.cbank.push({
      name: 'wireN',
      nnames: [],
      svg: '<path class="wn" d="M '+this.wnx+',0 '+this.wnx+',100"/>'
    })

    this.cbank.push({
      name: 'wireNdown',
      nnames: [],
      svg: '<path class="wn" d="M '+this.wlx+',80 '+this.wnx+',100"/>'
    })

    this.cbank.push({
      name: 'wireNup',
      nnames: [],
      svg: '<path class="wn" d="M '+this.wlx+',20 '+this.wnx+',0"/>'
    })

    this.cbank.push({
      name: 'wirePE',
      nnames: [],
      svg: '<path class="wp" d="M '+this.wpx+',100 '+this.wpx+',0"/>'
    })

    this.cbank.push({
      name: 'wirePEdown',
      nnames: [],
      svg: '<path class="wp" d="M '+this.wpx+',100 '+(this.wlx+1)+',80"/>'
    })

    this.cbank.push({
      name: 'wirePEup',
      nnames: [],
      svg: '<path class="wp" d="M '+this.wpx+',0 '+(this.wlx+1)+',20"/>'
    })
  
//Шины
    this.cbank.push({
      name: 'busL',
      nnames: [],
      svg: '<path class="bl" d="M 0,'+this.bly+' H 100"/>'
    })

    this.cbank.push({
      name: 'busN',
      nnames: [],
      svg: '<path class="bn" d="M 0,'+this.bny+' H 100"/>'
    })

    this.cbank.push({
      name: 'busPE',
      nnames: [],
      svg: '<path class="bp" d="M 0,'+this.bpy+' H 100"/>'
    })

    this.cbank.push({
      name: 'busLd',
      nnames: [],
      svg:
        '<path d="M '+(this.wlx-50)+','+this.bly+' V 100"/>'+
        '<circle class="bcl" cx="'+(this.wlx-50)+'" cy="'+this.bly+'" r="3" />'
    })

    this.cbank.push({
      name: 'busLu',
      nnames: [],
      svg: 
        '<path d="M '+this.wlx+','+this.bly+' V 0"/>'+
        '<circle class="bcl" cx="'+this.wlx+'" cy="'+this.bly+'" r="3" />'
    })

    this.cbank.push({
      name: 'busNd',
      nnames: [],
      svg: 
        '<path class="wn" d="M '+(this.wnx-50)+','+this.bny+' V 100"/>'+
        '<circle class="cn" cx="'+(this.wnx-50)+'" cy="'+this.bny+'" r="3" />'
    })

    this.cbank.push({
      name: 'busNu',
      nnames: [],
      svg: 
        '<path class="wn" d="M '+this.wnx+','+this.bny+' V 0"/>'+
        '<circle class="cn" cx="'+this.wnx+'" cy="'+this.bny+'" r="3" />'
    })

    this.cbank.push({
      name: 'busPEd',
      nnames: [],
      svg: 
        '<path class="wp" d="M '+(this.wpx-50)+','+this.bpy+' V 100"/>'+
        '<circle class="cp" cx="'+(this.wpx-50)+'" cy="'+this.bpy+'" r="3" />'
    })

    this.cbank.push({
      name: 'busPEu',
      nnames: [],
      svg: 
        '<path class="wp" d="M '+this.wpx+','+this.bpy+' V 0"/>'+
        '<circle class="cp" cx="'+this.wpx+'" cy="'+this.bpy+'" r="3" />'
    })
    //Ноды
    this.cbank.push({
      name: 'diff',
      nnames: ['Diff 2P', 'Diff 4P'],
      svg: 
        '<ellipse cx="67" cy="59.5" rx="16.028372" ry="5.5283709" />'+
        '<path d="m 50,59.637772 h -9.835149 l 0.04436,-20.063517 15.914783,0.05478"/>'+
        '<path d="M 67,100 V 50"/>'+
        '<path d="M 67,0 V 21"/>'+
        '<path d="M 67,50 54,23"/>'+
        '<path d="M 57,31 52.892815,33.364576 59.355164,45.893491 63.5,43.5"/>'+
        '<path style="stroke:#db3f3b" d="m 64,19 6,5"/>'+
        '<path style="stroke:#db3f3b" d="m 70,19 -6,5"/>',
      tx1: 10,
      ty1: 20,
    })

    this.cbank.push({
      name: 'count',
      nnames: ['Counter 1P', 'Counter 4P'],
      svg:
        '<path d="M 67,100.466 V 49.874316"/>'+
        '<path d="M 67,0.68389843 V 21.282"/>'+
        '<rect style="fill:none;fill-opacity:1;stroke:#1f2607;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:1" id="rect30019" width="20.794313" height="27.495136" x="56.60284" y="22.102839" />'+
        '<path d="M 57,29 H 77" id="path30075"/>'+
        '<text xml:space="preserve" style="font-variant:normal;font-weight:bold;font-stretch:normal;font-size:11.2889px;font-family:Calibri;text-align:justify;fill:#1f2607;fill-opacity:1;stroke:none;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:19.2756;stroke-opacity:1" x="58.583858" y="41.399956" id="text30857">'+
          '<tspan id="tspan30855" style="font-variant:normal;font-weight:bold;font-stretch:normal;font-size:11.2889px;font-family:Calibri;fill:#1f2607;fill-opacity:1;stroke:none;stroke-width:1.8;stroke-opacity:1" x="58.583858" y="41.399956">Wh</tspan></text>',
      tx1: 10,
      ty1: 20,
    })
    this.cbank.push({
      name: 'km',
      nnames: ['KM 1P', 'KM 3P'],
      svg:
        '<path d="M '+this.wlx+',100 V '+this.dy+'"/>'+
        '<path d="M '+this.wlx+',0 V '+this.uy+'"/>' +
        '<path d="M '+this.wlx+','+this.dy+' 54.290322,23.064516"/>'+
        '<path d="m 67,21 c -1.225516,0.04298 -2.4593,-0.484976 -3.274373,-1.40116 -0.815073,-0.916183 -1.195818,-2.203038 -1.010468,-3.415219 0.153347,-1.002888 0.685803,-1.943147 1.46697,-2.590509 C 64.963296,12.94575 65.986079,12.597165 67,12.632725"/>',
      tx1: 10,
      ty1: 20,
    })

    this.cbank.push({
      name: 'motor',
      nnames: ['Motor 1L', 'Motor 3L'],
      svg:
        '<path d="M 67,1.2130651 67,21.28209"/>'+
        '<circle cx="68.317619" cy="43.175556" r="21.893467" />'+
        '<path d="m 59.79032,50 0.17742,-15.225808 9.45838,8.401364 8.638394,-8.401365 L 78.241933,50"/>',
      tx1: 10,
      ty1: 20,
    })

    this.cbank.push({
      name: 'auto',
      nnames: ['Auto 1P', 'Auto 2P', 'Auto 3P'],
      svg: 
        '<path d="M 67,100.466 V 49.874316" id="path8542"/>'+
        '<path d="M 67,0.68389843 V 21.282" id="path8544"/>'+
        '<path d="M 67,49.874315 54.290322,23.064516" id="path8600"/>'+
        '<path d="m 57.974814,30.836585 -5.081999,2.527991 6.10751,12.706334 4.937526,-2.655893"/>'+
        '<path style="stroke:#db3f3b" d="m 64,19 6,5"/>'+
        '<path style="stroke:#db3f3b" d="m 70,19 -6,5"/>',
      tx1: 10,
      ty1: 20,
      text1: 'QF888',
    })

    this.cbank.push({
      name: 'freqconv',
      nnames: ['FreqConv 3P', 'FreqConv 5P'],
      svg: 
        '<path d="M 67,66 V 100"/>'+
        '<path d="M 67,0 V 21"/>'+
        '<rect width="44.992653" height="44.992653" x="44.503674" y="21" />'+
        '<path d="M 44.503673,65.992652 89.496322,21"/>'+
        '<path d="m 72.015287,29.698249 c -0.322084,1.317829 -1.197039,2.491194 -2.368196,3.175886 -1.171157,0.684692 -2.62285,0.871552 -3.929224,0.505765 -0.841415,-0.235598 -1.610975,-0.686389 -2.295364,-1.229616 -0.68439,-0.543227 -1.289265,-1.178949 -1.878026,-1.824584 -0.88009,-0.965106 -1.736259,-1.963707 -2.761109,-2.773441 -1.02485,-0.809734 -2.248483,-1.428891 -3.552621,-1.501069 -1.199211,-0.06637 -2.418336,0.351645 -3.324507,1.139912 -0.906171,0.788268 -1.489,1.937752 -1.589353,3.134598" sodipodi:nodetypes="csssc" />>'+
        '<g transform="rotate(90,72.939393,50.611949)">'+
          '<path d="m 78.795337,38.547063 c 1.317829,0.322084 2.491194,1.197039 3.175886,2.368196 0.684692,1.171157 0.871552,2.62285 0.505765,3.929224 -0.235598,0.841415 -0.686389,1.610975 -1.229616,2.295364 -0.543227,0.68439 -1.178949,1.289265 -1.824584,1.878026 -0.965106,0.88009 -1.963707,1.736259 -2.773441,2.761109 -0.809734,1.02485 -1.428891,2.248483 -1.501069,3.552621 -0.06637,1.199211 0.351645,2.418336 1.139912,3.324507 0.788268,0.906171 1.937752,1.489 3.134598,1.589353" sodipodi:nodetypes="csssc" />'+
          '<path d="M 81.989599,51.608537 75.574603,47.490612"/>'+
          '<path d="m 73.022102,49.813315 3.826695,-5.416989"/>'+
        '</g>',
      tx1: 10,
      ty1: 20,
    })

    this.cbank.push({ //группа освещения
      name: 'light',
      nnames: ['Light'],
      svg: 
        '<path d="M '+this.wlx+',0 V '+this.uy+'"/>'+
        '<path d="M 52.095594,28.472842 84.50962,57.911329" id="path8544-7" sodipodi:nodetypes="cc" />'+
        '<circle cx="68.317619" cy="43.175556" r="21.893467" />'+
        '<path d="M 84.509619,28.472842 52.095594,57.911329" id="path8544-7-9" sodipodi:nodetypes="cc" />',
        tx1: 10,
        ty1: 20,
    })

    this.cbank.push({ //группа розеток
      name: 'socket',
      nnames: ['Socket 3P', 'Socket 5P'],
      svg: 
        '<path d="M '+this.wlx+',0 V '+this.uy+'"/>'+
        
        '<path style="fill:none;stroke:#1f2607;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-dashoffset:5.1" id="path6094" sodipodi:type="arc" sodipodi:cx="68.317619" sodipodi:cy="21.479702" sodipodi:rx="21.893467" sodipodi:ry="21.893467" sodipodi:start="0" sodipodi:end="3.1415927" sodipodi:arc-type="slice" d="M 90.211086,21.479702 A 21.893467,21.893467 0 0 1 79.264353,40.440001 21.893467,21.893467 0 0 1 57.370885,40.44 21.893467,21.893467 0 0 1 46.424152,21.479702 h 21.893467 z" />'+
        '<path d="m 68.302605,43.192086 0.015,21.876937"/>'+
        '<path d="M 46.424151,43.704721 H 90.211086"/>',
        tx1: 10,
        ty1: 20,
    })

    this.cbank.push({
      name: 'consumer',
      nnames: ['Consumer'],
      svg: '<rect width="100" height="100" fill="#ffcc33"></rect>'
    })
  }
}
