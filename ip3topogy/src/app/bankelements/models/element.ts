export class Elem {
  name:   string;     //Имя
  nnames: string[];   //Какие типы(имена) нодов изображаются этим элементом
  svg:    string;     //SVG-чертеж элемента
  tx1?:   number;     //Координата X первого текста
  ty1?:   number;     //Координата Y первого текста
  text1?: string;     //Первый текст

  static getText1(e:Elem) {
    return '<text x="' + e.tx1 + '" y="' + e.ty1 +'" style="font-weight:bold;font-size:20px;">' + e.text1 + '</text>';
  }
}
