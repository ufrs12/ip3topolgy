import { Injectable } from '@angular/core';
import { Nod } from '../models/node';
import { Tree } from '../models/tree';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public strtree: string = '';
  public tree:    Tree;
  public nodes:   Nod[] = [];

  constructor() {
    this.tree = new Tree;
  }
}
