import { Cnode } from './cnode';
import { Tree } from './tree';

export class Project {
    version:        string;
    scope:          string;
    selectedTree:   string;
    trees:          Tree[] =[];
    custom_nodes:   Cnode[] =[];
    
    constructor() {
        this.version        = '1.0.0';
        this.scope          = 'project';
        this.selectedTree   = 'халлоу';

        let t = new Tree;
        this.trees.push(t);

        let a = new Cnode;
        let b = new Cnode;
        this.custom_nodes.push(a);
        this.custom_nodes.push(b);
    }
}
