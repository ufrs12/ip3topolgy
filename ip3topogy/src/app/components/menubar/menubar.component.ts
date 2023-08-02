import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { BankelementsComponent } from 'src/app/bankelements/components/bankelements/bankelements.component';
import { D3treeComponent } from '../import/d3tree/d3tree.component';
import download from "downloadjs";

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
  openBankElemsDialog() {
    this.dialog.open(BankelementsComponent);
  }
  Dload() {
    download(document.querySelector('#sss').innerHTML, 'scheme.svg');
  }
}
