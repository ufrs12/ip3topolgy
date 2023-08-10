import { Injectable } from '@angular/core';
import { Project, Recent } from './d3emodel';

@Injectable({
  providedIn: 'root'
})
export class D3eLocstorService {
  Init(){
    if (!localStorage.getItem('b3editor-recents.json')){
      localStorage.setItem('b3editor-recents.json', '')
    }
  }

  LoadAllProjs(){
    let allprojs: Map<string, Project> = new Map;
    for(let key in localStorage) {
      if (key.indexOf('b3projects')==0){
        allprojs.set(key.substring(10), JSON.parse(localStorage.getItem(key)));
      } 
    }
    return allprojs;
  }

  LoadRecents(){
    let recents:Recent[] = [];
    if (localStorage.getItem('b3editor-recents.json')){
      recents = JSON.parse(localStorage.getItem('b3editor-recents.json'));
    }
    return recents;
  }

  CreateProj(p:Project){
    localStorage.setItem(p.path, JSON.stringify(p))
    let r = this.LoadRecents();
    r.push({
      name:         p.name,
      description:  p.description,
      path:         p.path,
      isOpen:       false
    });

    localStorage.setItem('b3editor-recents.json', JSON.stringify(r));
  }
}
