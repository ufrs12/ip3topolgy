import { Component, OnInit } from '@angular/core';
import { Svg, SVG } from '@svgdotjs/svg.js'

@Component({
  selector: 'app-shema',
  templateUrl: './shema.component.html',
  styleUrls: ['./shema.component.css']
})
export class ShemaComponent implements OnInit{
  draw:Svg;
  ngOnInit() {
    this.draw = SVG().addTo('#someId').size(300, 300);
    let rect =  this.draw.rect(100, 100).attr({ fill: '#38A6FF' });

    var symbol =  this.draw.symbol();
    symbol.rect(100, 100).fill('#f09');
    var use  =  this.draw.use(symbol).move(200, 200);
    use  =  this.draw.use(symbol).move(100, 100);
    console.log(document.getElementsByTagName('svg')[0])
    this.draw.size(400, 400);
    var ss =  this.draw.symbol();
    ss.svg('<rect width="100" height="100" fill="#38A6FF"></rect>');
    use  =  this.draw.use(ss).move(300, 300);
  }
}
