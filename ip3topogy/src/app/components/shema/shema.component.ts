import { Component, OnInit } from '@angular/core';
import { Svg, SVG, Symbol } from '@svgdotjs/svg.js';
import { CbankService } from 'src/app/bankelements/services/cbank.service';
import { GlobalService } from 'src/app/services/global.service';
import { SchemeService } from './services/scheme.service';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import download from "downloadjs";

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
    public schemeService: SchemeService) {

  }
  

  Convert(){

    // var node = document.getElementById('svg');

    // htmlToImage.toPng(node)
    //   .then(function (dataUrl) {
    //   var img = new Image();
    //   img.src = dataUrl;
    //   document.body.appendChild(img);
    //   })
    //   .catch(function (error) {
    //   console.error('oops, something went wrong!', error);
    // });

    htmlToImage.toPng(document.getElementById('svg'))
  .then(function (dataUrl) {
    download(dataUrl, 'my-node.png');
  });


  }


  ToSVG(){
    function filter (node) {
      return (node.tagName !== 'i');
    }
    htmlToImage.toSvg(document.getElementById('super'), { filter: filter 
    })
     .then(function (dataUrl) {
       let svg = decodeURIComponent(dataUrl.split(',')[1])
       console.log(svg);
       document.getElementById('svg').innerHTML = svg          
     });
  }

  Draw() {
    document.querySelector('#sss').innerHTML = '';
    this.draw = SVG().addTo('#sss');
    
    var style = this.draw.style();
    console.log(this.cbankService.gstyles);
    for (let [key, value] of  this.cbankService.gstyles) { // перебираем глобальные стили
      style.rule(key, value);
    }
    
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

