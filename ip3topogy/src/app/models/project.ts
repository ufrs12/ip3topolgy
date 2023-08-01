import { Cnode } from './cnode';
import { Tree } from './tree';
export interface data {
    version:        string;
    scope:          string;
    selectedTree:   string;
    trees:          Tree[];
    custom_nodes:   Cnode[];
}
export class Project {
    name:           string;
    description:    string;
    data:           data;
    path:           string;

    constructor() {
    }
}
