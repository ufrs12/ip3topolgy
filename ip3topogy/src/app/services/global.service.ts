import { Injectable } from '@angular/core';
import { Tree } from '../models/tree';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public strtree:string = '';
  public tree:Tree;
}
