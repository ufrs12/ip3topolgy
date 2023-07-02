export class Cnode {
    version:        string;
    scope:          string;
    name:           string;
    category:       string;
    title:          string;
    description:    string;
    properties = new Object();

    constructor() {
        this.version = '1.0.0';
        this.scope = 'node';
        this.name = 'халлоу';
        this.category  = '';
        this.title  = '';
        this.description  = '';
        this.properties = { 
            "ключ1": "значение1",
            "ключ2": "значение2"
           };
        Object.assign(this.properties, {key3: "value3"});
    }
}
