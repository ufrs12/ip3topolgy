export class Cnode {
    version:        string;
    scope:          string;
    name:           string;
    category:       string;
    title:          string;
    description:    string;
    properties = new Object();

    constructor() {
        this.version = '0.3.0';
        this.scope = 'node';
        this.name = 'халлоу';
        this.category  = 'action';
        this.title  = 'her';
        this.description  = '';
        this.properties = { 
            "ключ1": "значение1",
            "ключ2": "значение2"
           };
        Object.assign(this.properties, {key3: "value3"});
    }
}
