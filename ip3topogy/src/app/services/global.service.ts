import { Injectable } from '@angular/core';
import { Project, Tree, Nod } from '../models/d3emodel';
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
}
