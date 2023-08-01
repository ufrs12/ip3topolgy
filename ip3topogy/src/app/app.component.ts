import { Component, OnInit } from '@angular/core';
import { Cnode } from './models/cnode';
import { Project } from './models/project';
import { Tree } from './models/tree';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  opened = true;
  mycnode = new Cnode;
  mytree = new Tree;
  a: string = '';
  as: string = '';

  mypr = new Project;
  constructor(public globalService: GlobalService) {}

  ngOnInit(){
    this.a = this.mycnode.name;
    this.as = JSON.stringify(this.mycnode);
  }
}
