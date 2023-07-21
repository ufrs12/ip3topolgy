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
    if(!this.globalService.tree.root){ //выходим, если нет рута
      return false;
    }
    this.grid.length = 0;
    this.grid.push([{xoffset:50,item:'wire'}]);
    // this.grid[0][0] = {x:50,item:'wire'};
    // this.grid[1][0] = {x:50,item:'wire'};
    // this.grid.push([]);
    // this.grid[2][0] = {x:50,item:'wire'};
    return false;
  }
}
