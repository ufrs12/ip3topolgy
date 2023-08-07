//сервис data3editor
import { Injectable } from '@angular/core';
import { Cnode, Nod, Project, Recent, Tree } from '../models/d3emodel';

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
  }}

  CreateProjLocStor(){
    
  }

  CreateProj(){
    let p = new Project;
    p = {
      name: 'Новый проект',
      description: '',
      data: {
        version: '0.3.0',
        scope: "project",
        selectedTree: '',
        trees: this.CreateTrees(),
        custom_nodes: this.CreateCnodes()
      },
      path: this.IdGen()
    };
    console.log(this.IdGen());
    return p;
  }

  CreateCnodes(){
    let cnodes:Cnode[] = [];
    return cnodes;
  }

  CreateTrees(){
    let trees:Tree[] = [];
    trees.push({
      version:      '0.3.0',
      scope:        'tree',
      id:           this.IdGen(),
      title:        'Electric',
      description:  '',
      root:         null,
      properties:   {},
      nodes:        {},
      display:      {
        "camera_x": 318,
        "camera_y": 207.5,
        "camera_z": 0.75,
        "x": -252,
        "y": -144
      } 
    });
    return trees;
  }

  IdGen(){
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
      let m = Math.floor(Math.random() * 0x10);
      s[i] = hexDigits.substring(m, m + 1);
    }
    // bits 12-15 of the time_hi_and_version field to 0010
    s[14] = "4";

    // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[19] = hexDigits.substring(((s[19] as any) & 0x3) | 0x8,(((s[19] as any) & 0x3) | 0x8) + 1);

    s[8] = s[13] = s[18] = s[23] = "-";

    return s.join("");
  }

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
      }
    } 
  }
}
