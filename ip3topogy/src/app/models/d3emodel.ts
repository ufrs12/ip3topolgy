export class Recent {
    name:           string;
    description:    string;
    path:           string;
    isOpen:         boolean;
}

export class Project {
    name:           string;
    description:    string;
    data:           data;
    path:           string;
}

export interface data {
    version:        string;
    scope:          string;
    selectedTree:   string;
    trees:          Tree[];
    custom_nodes:   Cnode[];
}

export class Cnode {
    version:        string;
    scope:          string;
    name:           string;
    category:       string;
    title:          string;
    description:    string;
    properties = new Object();
}

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
      nodes =         new Object();
      display:        Display;
}

export class Display {
    camera_x:   number;
    camera_y:   number;
    camera_z:   number;
    x:          number;
    y:          number;
}

export class Nod {
    id:             string;
    name:           string;
    title:          string;
    description:    string;
    properties =    new Object();
    display =       new Object();
    children?:       string[];
}