import { Cnode } from './cnode';
import { Tree } from './tree';

export class Project {
    version:        string;
    scope:          string;
    selectedTree:   string;
    trees:          Tree[] =[];
    custom_nodes:   Cnode[] =[];
    
    constructor() {
        this.version        = '0.3.0';
        this.scope          = 'project';

        let t = new Tree;
        this.trees.push(t);

        this.selectedTree   = t.id;

        let a = new Cnode;
        this.custom_nodes.push(a);
    }
}
