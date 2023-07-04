import { IdgenService } from '../services/idgen.service';

export class Node {
    id:             string;
    name:           string;
    title:          string;
    description:    string;
    properties =    new Object();
    display =       new Object();
    children:       string[];

    constructor() {
        let id = new IdgenService;
        this.id = id.id;
        this.name = 'имя';
        this.title = '',
        this.description = '',

        this.properties = { 
            "ключ1": "значение1",
            "ключ2": "значение2"
           };
        Object.assign(this.properties, {key3: "value3"});

        this.display = { 
            "x": 150,
            "y": 90
        };

        this.children = [];
    }
}