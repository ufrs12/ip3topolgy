//сервис data3editor
import { Injectable } from '@angular/core';
import { Cnode, Nod, Project, Recent, Tree } from './d3emodel';
import { D3eCnodesService } from './d3e.cnodes.service';
import { D3eLocstorService } from './d3e.locstor.service';

@Injectable({
  providedIn: 'root'
})
export class D3eService {
  public recents:  Recent[] = [];
  public allprojs: Map<string, Project> = new Map;
  public project:  Project;
  public tree:     Tree;
  public nodes:    Nod[] = [];

  constructor(
    public d3elocstorserv: D3eLocstorService,
    public d3eCnodesserv: D3eCnodesService
  ) {}

  Init(){//инициализация 
    if (true){//?нужно сравнение, если браузер, то берем его.
      this.d3elocstorserv.Init();
      this.recents = this.d3elocstorserv.LoadRecents();
      this.allprojs.clear();
      this.allprojs = this.d3elocstorserv.LoadAllProjs()
  }}

  CreateProjLocStor(){
    this.d3elocstorserv.CreateProj(this.CreateProj());
    this.Init();
  }

  CreateProj(){
    let p = new Project;
    let t:Tree[] = this.CreateTrees();
    p = {
      name: 'Новый проект',
      description: '',
      data: {
        version: '0.3.0',
        scope: "project",
        selectedTree: t[0].id,
        trees: t,
        custom_nodes: this.d3eCnodesserv.cnodes
      },
      path: 'b3projects-' + this.IdGen()
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

  LoadProj(key:string){
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
}
