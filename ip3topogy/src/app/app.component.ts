import { Component, OnInit } from '@angular/core';
import { Cnode } from './models/cnode';
import { Project } from './models/project';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  mycnode = new Cnode;
  a: string = '';
  as: string = '';

  mypr = new Project;

  ngOnInit(){
    this.a = this.mycnode.name;
    this.as = JSON.stringify(this.mycnode);
    console.log(this.as);
    console.log(this.mycnode.properties);
    console.log(JSON.stringify(this.mypr));
  }
}
{
  "custom_nodes":[
    {
      "properties":
        {"ключ1":"значение1","ключ2":"значение2","key3":"value3"},
      "version":"1.0.0",
      "scope":"node",
      "name":"халлоу",
      "category":"",
      "title":"",
      "description":""
    },
    {
      "properties":
        {"ключ1":"значение1","ключ2":"значение2","key3":"value3"},
      "version":"1.0.0",
      "scope":"node",
      "name":"халлоу",
      "category":"",
      "title":"",
      "description":""}
  ],
  "version":"1.0.0",
  "scope":"project",
  "selectedTree":"халлоу"
}
