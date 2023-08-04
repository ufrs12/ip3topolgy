import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { D3eService } from './d3e.service';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {
  private treeObserv = new Subject<string>();
  $treeObserv = this.treeObserv.asObservable();

  constructor(public d3eserv: D3eService) {}
  
  LoadTree(k:string, t:string){
    this.d3eserv.LoadProj(k);
    this.d3eserv.LoadTreeAndNodes(t);
    this.SetIdtree(this.d3eserv.tree.title);
  }
  SetIdtree(id: string) {
    this.treeObserv.next(id);
  }
}
function thisSetIdtree(title: string) {
  throw new Error('Function not implemented.');
}

