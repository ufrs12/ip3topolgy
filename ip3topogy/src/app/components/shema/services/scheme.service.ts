import { Injectable } from '@angular/core';
import { Elem } from 'src/app/bankelements/models/element';
import { CbankService } from 'src/app/bankelements/services/cbank.service';
import { Nod } from 'src/app/models/node';
import { GlobalService } from 'src/app/services/global.service';

export interface Cell{
  xoffset: number;    //смещение
  item?:   string;    //название элемента
  nod?:    Nod;       //год
  fsvg?:   string;    //полный SVG элемента
  wireb?:  string[];  //начало провода
  wiree?:  string[];  //конец провода
}
@Injectable({
  providedIn: 'root'
})
export class SchemeService {
  grid:Cell[][] = [[],[]];
  xoff:number = 0;

  constructor(
    public cbankService: CbankService,
    public globalService: GlobalService) {}

  Init() {
    if(this.globalService.tree.root){ //выходим, если нет рута
      this.grid.length = 0;
      this.Construct(this.globalService.tree.root, 0, 0);
      console.log(this.grid);
      this.DrawNodes();
      this.DrawBus();
      this.DrawWires();
    }
  }
  DrawWires(){
    for (var { row, r } of this.grid.map((row, r) => ({ row, r }))) {
      for (var { cell, c } of row.map((cell, c) => ({ cell, c }))) {  
        if (cell.nod){

        }
      }
    }
  }

  CheckCont(p: Object) :string[] {
    let ch:string[] = ['P1', 'P2', 'P3', 'P4', 'P5'];
    let co:string[] = ['L1', 'L2', 'L3', 'N', 'PE'];
    let arr:string[] = [];
    for (var s in p) {
      if (ch.includes(s) && co.includes(p[s])){
        //let asd:string = p[s];
        arr.push(p[s]);
      }
    } 
    return arr
  }

  DrawBus(){
    let phtext:string[] = ['L1', 'L2', 'L3'];
    phtext = phtext.filter(x => this.CheckCont(this.globalService.tree.properties).includes(x));
    console.log(phtext.join());
    for (var { row, r } of this.grid.map((row, r) => ({ row, r }))) {
      for (var { cell, c } of row.map((cell, c) => ({ cell, c }))) {  
        if (cell.item == 'bus'){
          if (phtext.join().length > 1){
            cell.fsvg += this.cbankService.cbank.find(e => e.name =='busL').svg;
          }
        }
      }
    }
    
  }

  DrawNodes(){
    for (var { row, r } of this.grid.map((row, r) => ({ row, r }))) {
      for (var { cell, c } of row.map((cell, c) => ({ cell, c }))) {  
        if (cell.nod){
          let ce =this.cbankService.cbank.find(e => e.nnames.includes(cell.nod.name));
          cell.fsvg += ce.svg;
          ce.text1 = cell.nod.title;
          cell.fsvg += Elem.getText1(ce);
        }
      }
    }
  }

  Construct(p:string, r:number, c:number){
    let n:Nod = this.globalService.nodes.find(r => r.id === p); //ищем нод
      
    if (!this.grid[r]){this.grid.push([])};
    this.grid[r][c] = {xoffset:this.xoff,item:'wire'};
    r++;

    if (!this.grid[r]){this.grid.push([])};
    this.grid[r][c] = {xoffset:this.xoff,nod:n};
    r++;
      
    let childs = n.children;
    if (typeof childs != 'undefined'){
      if (childs.length >1){
        if (!this.grid[r]){this.grid.push([])};
        this.grid[r][c] = {xoffset:this.xoff,item:'wire'};
        r++;
  
        if (!this.grid[r]){this.grid.push([])};
        for (let i = 0; i < childs.length; i += 1) {
        this.grid[r][c+i] = {xoffset:this.xoff,item:'bus'};
        } 
        r++;
      }
      for (var ch of childs) {
        this.xoff = -50;
        this.Construct(ch, r, c);
        c++;
      }
    }
  }
}
