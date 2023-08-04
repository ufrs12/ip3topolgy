import { Injectable } from '@angular/core';
import { Project, Tree, Nod } from '../models/d3emodel';
import { Subject } from 'rxjs';
import { D3eService } from './d3e.service';

@Injectable({
  providedIn: 'root'
})

export class GlobalService {

  //public nodes:   Nod[] = [];
  private idtree = new Subject<string>();
  $idtree = this.idtree.asObservable();

  constructor(public d3eserv: D3eService) {}
  
  LoadTree(k:string, t:string){
    this.d3eserv.LoadProj(k);
    this.d3eserv.LoadTreeAndNodes(t);

    //let ns:Nod[] = [];
    //console.log(this.d3eserv.tree.nodes.values())
    //ns = Array.from( this.d3eserv.tree.nodes.values() )
    
    // let ns:Nod[] = [];
    // Object.values(this.d3eserv.tree.nodes).forEach(function(elem) {
    //   ns.push(elem);
    // });
    //this.nodes.length = 0;
    //this.nodes = this.nodes.concat(ns);
    this.SetIdtree(this.d3eserv.tree.title);
  }
  SetIdtree(id: string) {
    this.idtree.next(id);
  }
}
function thisSetIdtree(title: string) {
  throw new Error('Function not implemented.');
}

