export class Project {
    version:        string;
    scope:          string;
    id:             string;

    constructor() {
        this.version = '1.0.0';
        this.scope = 'tree';
        this.id = 'халлоу';

        let a = new Cnode;
        let b = new Cnode;
        this.custom_nodes.push(a);
        this.custom_nodes.push(b);
    }




}
var data = {
    version : b3e.VERSION,
    scope : 'tree',
    id : tree._id,
    title : root.title,
    description : root.description,
    root : first[0] || null,
    properties : root.properties,
    nodes : {},
    display : {
    camera_x : tree.x,
    camera_y : tree.y,
    camera_z : tree.scaleX,
    x : root.x,
    y : root.y,
    },
    };