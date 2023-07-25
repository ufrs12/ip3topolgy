import { Component, OnInit } from '@angular/core';
import { Svg, SVG, Symbol } from '@svgdotjs/svg.js';
import { CbankService } from 'src/app/bankelements/services/cbank.service';
import { GlobalService } from 'src/app/services/global.service';
import { SchemeService } from './services/scheme.service';

@Component({
  selector: 'app-shema',
  templateUrl: './shema.component.html',
  styleUrls: ['./shema.component.css']
})
export class ShemaComponent{
  draw:Svg;

  constructor(
    public cbankService: CbankService,
    public globalService: GlobalService,
    public schemeService: SchemeService) {}

  Draw() {
    document.querySelector('#someId').innerHTML = '';
    this.draw = SVG().addTo('#someId');

    this.schemeService.Init();

    let xsize:number = 0;
    let ysize:number = this.schemeService.grid.length;

    for (var { row, r } of this.schemeService.grid.map((row, r) => ({ row, r }))) {
      if (row.length>xsize)
        {xsize = row.length};
      for (var { cell, c } of row.map((cell, c) => ({ cell, c }))) {  
        if (cell.fsvg){
          var symb = this.draw.symbol();
          console.log(r + "  " +c)
          symb.svg(cell.fsvg);
          this.draw.use(symb).move(c*100+100 + cell.xoffset, r*100);
        }
      }
    }
    this.draw.size(xsize*100+100,ysize*100);
  }
}

