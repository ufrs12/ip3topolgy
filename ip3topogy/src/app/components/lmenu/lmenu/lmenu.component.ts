import {NestedTreeControl} from '@angular/cdk/tree';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {D3eService} from 'src/app/services/d3e.service';
import {GlobalService} from 'src/app/services/global.service';

interface FoodNode {
  name:       string;
  prid?:      string;
  trid?:      string;
  status?:    string;
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

  constructor(
    public globalService: GlobalService,
    public d3eserv: D3eService) {
    
    d3eserv.Init();//инициализация сервиса data3editor
    this.TDATALoad();
    this.dataSource.data = this.TREE_DATA;
  }
  
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  
  CreateProj(){
    this.d3eserv.CreateProjLocStor();
    this.TDATALoad();
    this.dataSource.data = this.TREE_DATA;
  }

  TDATALoad(){
    this.TREE_DATA.length = 0;
    for(let [key, proj] of this.d3eserv.allprojs) {
      let trnames:FoodNode[] = [];
      for (let index = 0; index < proj.data.trees.length; ++index) {
        trnames.push({name: proj.data.trees[index].title, prid:key, trid:proj.data.trees[index].id});
      }
      this.TREE_DATA.push({name: proj.name, prid:key, children: trnames});
    }
  }
}
