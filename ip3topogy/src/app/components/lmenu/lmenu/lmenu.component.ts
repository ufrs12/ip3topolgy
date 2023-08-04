import {NestedTreeControl} from '@angular/cdk/tree';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import { Project, Nod } from 'src/app/models/d3emodel';
import { GlobalService } from 'src/app/services/global.service';

interface FoodNode {
  name:       string;
  pr:         string;
  tr?:        string;
  children?:  FoodNode[];
}

@Component({
  selector: 'app-lmenu',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './lmenu.component.html',
  styleUrls: ['./lmenu.component.css'],
})
export class LmenuComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  TREE_DATA: FoodNode[] = [];

  constructor(public globalService: GlobalService) {

    let ls =  localStorage;

    for(let i=0; i<localStorage.length; i++) {
      let key = localStorage.key(i);
      if (key.indexOf('b3projects')==0){
        globalService.project = JSON.parse(localStorage.getItem(key));
        let trnames:FoodNode[] = [];
        for (let index = 0; index < globalService.project.data.trees.length; ++index) {
          trnames.push({name: globalService.project.data.trees[index].title, pr:key, tr:globalService.project.data.trees[index].id});
        }
        this.TREE_DATA.push({name: globalService.project.name, pr:key, children: trnames});
      }
    }
    this.dataSource.data = this.TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  LoadTree(k:string, t:string){
    let pr:Project;
    pr = JSON.parse(localStorage.getItem(k));
    
    this.globalService.tree = pr.data.trees.find(tr => tr.id === t);
    let ns:Nod[] = [];
    Object.values(this.globalService.tree.nodes).forEach(function(elem) {
      ns.push(elem);
    });
    this.globalService.nodes.length = 0;
    this.globalService.nodes = this.globalService.nodes.concat(ns);

    this.globalService.SetIdtree(this.globalService.tree.title);
  }
}
