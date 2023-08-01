import { IdgenService } from '../services/idgen.service';
import { Display } from './display';
import { Nod } from './node';

export class Tree {
  asObservable() {
    throw new Error('Method not implemented.');
  }
    version:        string;
    scope:          string;
    id:             string;
    title:          string;
    description:    string;
    root:           string = null;
    properties =    new Object();
    nodes =         new Object();;
    display =       new Display();
    
    constructor() {
        this.version = '0.3.0';
        this.scope = 'tree';

        let id = new IdgenService;
        this.id = id.id;
        
        this.title = '2345243',
        this.description = '',
        this.root = null,

        this.properties = { 
            "ключ1": "значение1",
            "ключ2": "значение2"
           };
        Object.assign(this.properties, {key3: "value3"});

        //let n = new Node;
        //let t = n.id;
        //this.nodes = {
        //    t:n
        //};
        //Object.assign(this.nodes, {t:n}); //не добавляет потому что ключи одинаковые
    }
}
