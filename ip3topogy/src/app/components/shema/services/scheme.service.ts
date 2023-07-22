import { Injectable } from '@angular/core';
import { Elem } from 'src/app/bankelements/models/element';
import { CbankService } from 'src/app/bankelements/services/cbank.service';
import { GlobalService } from 'src/app/services/global.service';

export interface Cell{
  xoffset:number;
  item:string;
}
@Injectable({
  providedIn: 'root'
})
export class SchemeService {
  grid:Cell[][] = [[],[]];

  constructor(
    public cbankService: CbankService,
    public globalService: GlobalService) {}

  Init() {
    if(this.globalService.tree.root){ //выходим, если нет рута
      this.grid.length = 0;
      this.grid.push([{xoffset:50,item:'wire'}]);
      this.Construct(this.globalService.tree.root, 1, 0);
    }
  }

  Construct(p:string, r:number, c:number){
      let n: string = this.globalService.nodes.find(r => r.id === p).name; //имя(тип) рута
      let ce: Elem = this.cbankService.cbank.find(e => e.nnames.includes(n)); //svg элемент из банка, соответствующий имени(типу) рута
      //this.grid.push([{xoffset:50,item:ce.name}]);
      console.log(ce.name)
      //this.grid[r][c] = {xoffset:0,item:ce.name};
      if (!this.grid[r]){this.grid.push([])};
      this.grid[r][c] = {xoffset:0,item:ce.name};
      // this.grid[r].push({xoffset:50,item:ce.name});
  }
}
