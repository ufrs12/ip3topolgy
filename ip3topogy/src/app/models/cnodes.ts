
export class Cnodes {

    version:        string;
    scope:          string;
    name:           string;
    category:       string;
    title:          string;
    description:    string;
    properties  = {};

  
    constructor() {
        this.version = '1.0.0';
        this.scope = this.title || this.name;
        this.description = '';
        this.parameters  = {};
        this.properties  = {};
    }

}
  "version": "0.3.0",
  "scope": "node",
  "name": "Контроллер",
  "category": "action",
  "title": null,
  "description": null,
  "properties": {
    "model": "_",
    "location": "_"