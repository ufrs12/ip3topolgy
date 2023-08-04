//сервис data3editor
import { Injectable } from '@angular/core';
import { Nod, Project, Recent, Tree } from '../models/d3emodel';

@Injectable({
  providedIn: 'root'
})
export class D3eService {
  public recents:  Recent[] = [];
  public allprojs: Map<string, Project> = new Map;
  public project:  Project;
  public tree:     Tree;
  public nodes:    Nod[] = [];

  Init(){//инициализация 
    if (true){//?нужно сравнение, если браузер, то берем его.
      this.LoadRecentsFrLocStor();
      this.LoadAllProjs();
      console.log(this.allprojs)
  }}

  LoadAllProjs(){
    this.allprojs.clear();
    for(let key in localStorage) {
      if (key.indexOf('b3projects')==0){
        this.allprojs.set(key.substring(10), JSON.parse(localStorage.getItem(key)));
  } } }

  LoadProj(key){
    this.project =  this.allprojs.get(key);
  }
  
  LoadTreeAndNodes(id:string){
    this.tree =this.project.data.trees.find(tr => tr.id === id);

    let ns:Nod[] = [];
    Object.values(this.tree.nodes).forEach(function(elem) {
      ns.push(elem);
    });
    this.nodes.length = 0;
    this.nodes = this.nodes.concat(ns);
  }

  LoadRecentsFrLocStor(){
    for (let key in localStorage) {
      if (key.indexOf('-recents') >= 0){
        this.recents = JSON.parse(localStorage.getItem(key));
        console.log(this.recents)
  } } }
}
