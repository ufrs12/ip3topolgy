import {NestedTreeControl} from '@angular/cdk/tree';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import { Tree } from 'src/app/models/tree';
import { GlobalService } from 'src/app/services/global.service';

interface FoodNode {
  name: string;
  children?: FoodNode[];
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
      globalService.project = JSON.parse(localStorage.getItem(key));
      let trnames:FoodNode[] = [];
      for (let index = 0; index < globalService.project.trees.length; ++index) {
        trnames.push({name: globalService.project.trees[index].title});
      }

      this.TREE_DATA.push({name: key, children: trnames});
    }
    this.dataSource.data = this.TREE_DATA;
    console.log(this.dataSource.data)
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
