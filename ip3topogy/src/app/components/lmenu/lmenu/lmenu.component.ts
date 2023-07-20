import {NestedTreeControl} from '@angular/cdk/tree';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatTreeNestedDataSource, MatTreeModule} from '@angular/material/tree';
import { GlobalService } from 'src/app/services/global.service';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}


// const TREE_DATA: FoodNode[] = [
//   {
//     name: 'Fruit',
//     children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
//   },
//   {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
//       },
//       {
//         name: 'Orange',
//         children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
//       },
//     ],
//   },
// ];
@Component({
  selector: 'app-lmenu',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './lmenu.component.html',
  styleUrls: ['./lmenu.component.css'],
})
export class LmenuComponent {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  TREE_DATA: FoodNode[];

  constructor(public globalService: GlobalService) {
    this.TREE_DATA = [
        {
          name: 'Fruit',
          children: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Fruit loops'}],
        },
        {
          name: 'Vegetables',
          children: [
            {
              name: 'Green',
              children: [{name: 'Broccoli'}, {name: 'Brussels sprouts'}],
            },
            {
              name: 'Orange',
              children: [{name: 'Pumpkins'}, {name: 'Carrots'}],
            },
          ],
        },
      ];
    this.TREE_DATA[2] = {name: this.globalService.tree.title};
    this.dataSource.data = this.TREE_DATA;
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
  Ch(){
    this.TREE_DATA[2] = {name: '123'};
    this.dataSource.data[2] = {name: '12345'};
  }
}
