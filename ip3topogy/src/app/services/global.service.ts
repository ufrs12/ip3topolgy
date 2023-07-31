import { Injectable } from '@angular/core';
import { Nod } from '../models/node';
import { Tree } from '../models/tree';
import { Project } from '../models/project';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public project: Project = new Project;


  public strtree: string = '';
  public tree:    Tree;
  public nodes:   Nod[] = [];

  constructor() {
    this.tree = new Tree;
  }
}
