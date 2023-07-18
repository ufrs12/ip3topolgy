import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { D3treeComponent } from '../import/d3tree/d3tree.component';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {
  constructor(private dialog: MatDialog){}
  openImportTreeDialog() {
    this.dialog.open(D3treeComponent);
  }

}