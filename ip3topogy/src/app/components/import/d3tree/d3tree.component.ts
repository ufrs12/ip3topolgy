import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Nod } from 'src/app/models/node';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-d3tree',
  templateUrl: './d3tree.component.html',
  styleUrls: ['./d3tree.component.css']
})
export class D3treeComponent {
  
  constructor(  public globalService: GlobalService,
                public dialogRef: MatDialogRef<D3treeComponent>,) {}

  showFile() {
    let file = (document.getElementById("ff") as HTMLInputElement).files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) {
      document.getElementById('ta').innerHTML = reader.result.toString();
    };
    reader.onerror = function() {
      console.log(reader.error);
    };
  }

  Load(){
    this.globalService.strtree = document.getElementById('ta').innerHTML;
    this.globalService.tree = JSON.parse(this.globalService.strtree);
    let ns:Nod[] = [];
    Object.values(this.globalService.tree.nodes).forEach(function(elem) {
      ns.push(elem);
    });
    this.globalService.nodes.length = 0;
    this.globalService.nodes = this.globalService.nodes.concat(ns);
    this.onNoClick();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
