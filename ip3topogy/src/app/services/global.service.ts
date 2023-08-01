import { Injectable } from '@angular/core';
import { Nod } from '../models/node';
import { Tree } from '../models/tree';
import { Project } from '../models/project';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public project: Project = new Project;
  public strtree: string = '';
  public tree:    Tree = new Tree;
  public nodes:   Nod[] = [];
  private idtree = new Subject<string>();
  $idtree = this.idtree.asObservable();
  SetIdtree(id: string) {
    this.idtree.next(id);
  }

  constructor() {

  }
}
