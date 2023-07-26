export class Elem {
    name:   string;     //Имя
    nnames: string[];   //Какие типы(имена) нодов изображаются этим элементом
    svg:    string;     //SVG-чертеж элемента
    tx1?:   number;     //Координата X первого текста
    ty1?:   number;     //Координата Y первого текста
    text1?: string;     //Первый текст

    constructor() {
      this.nnames = [];
    }
    static getText1(e:Elem) {
        return '<text x="' + e.tx1 + '" y="' + e.ty1 +'" class="small" style="font-style:italic;font-weight:bold;font-size:19.7556px;font-family:Calibri;-inkscape-font-specification:"Calibri Bold Italic";text-align:justify;fill:#000000;fill-opacity:1;stroke:none;stroke-width:2.217;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:none;stroke-opacity:1">' + e.text1 + '</text>';
      }
}
