import Questao6 from '../../src/Lista_2/Questao6';
import Lista from '../../src/Lista';


let lista;
let list;
beforeEach(() => {
  lista = new Lista();
  list = new Questao6(lista);
});


test("Questao 6", () => {

  list.append('a');
  list.append('b');
  list.append('c');
  list.append('d');
  list.append('e');
  list.append('f');

  expect(list.substring(1,2)).toBe("b->c");

});