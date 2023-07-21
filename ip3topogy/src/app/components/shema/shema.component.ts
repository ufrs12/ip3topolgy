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
export class ShemaComponent implements OnInit{
  draw:Svg;
  
  s:number = 100; //Размер элемента
  constructor(
    public cbankService: CbankService,
    public globalService: GlobalService,
    public schemeService: SchemeService) {}

  Draw() {
    document.querySelector('#someId').innerHTML = '';
    this.draw = SVG().addTo('#someId');
    let symbols = new Map<string, Symbol>([]);
    this.AddSimbols(symbols);

    this.schemeService.Init();

    let xsize:number = 0;
    let ysize:number = this.schemeService.grid.length;

    // this.schemeService.grid.forEach(function(row, r) {
    //   if (row.length>xsize)
    //     {xsize = row.length};
    //   row.forEach(function(cell, c) {
    //     if(symbols.get(cell.item)){
    //       this.draw.use(symbols.get(cell.item)).move(c*100, r*100);
    //     };
    //   });
    // });

    for (var { row, r } of this.schemeService.grid.map((row, r) => ({ row, r }))) {
      if (row.length>xsize)
        {xsize = row.length};
        for (var { cell, c } of row.map((cell, c) => ({ cell, c }))) {  

        }
    }
    this.draw.size(xsize*100,ysize*100);


    // this.draw.use(symbols.get('auto')).move(0, 0); 
    // this.draw.use(symbols.get('wire')).move(100, 0); 
    // this.draw.use(symbols.get('consumer')).move(200, 0); 

    // var symbol =  this.draw.symbol();
    // symbol.rect(100, 100).fill('#f09');
    // this.draw.use(symbol).move(0, 0);

    console.log('x = ' + xsize + ', y = ' + ysize);
    console.log(this.schemeService.grid);
    console.log(symbols);
  }
  AddSimbols(ss){
    for(var sym of this.cbankService.cbank){
      var symb = this.draw.symbol();
      symb.svg(sym.svg);
      ss.set(sym.name, symb);
    }
  };

  ngOnInit() {
    // this.draw = SVG().addTo('#someId').size(300, 300);
    // let rect =  this.draw.rect(100, 100).attr({ fill: '#38A6FF' });
    // var symbol =  this.draw.symbol();
    // symbol.rect(100, 100).fill('#f09');
    // var use  =  this.draw.use(symbol).move(200, 200);
    // use  =  this.draw.use(symbol).move(100, 100);
    // console.log(document.getElementsByTagName('svg')[0]);
    // this.draw.size(400, 400);
    // var ss =  this.draw.symbol();
    // ss.svg('<rect width="100" height="100" fill="#25A6FF"></rect>');
    // use  =  this.draw.use(ss).move(300, 300);
  }
}

