import Questao4 from "../../src/Lista_2/Questao4";

let list;

beforeEach(() => {
  list = new Questao4();
});

test("Questao 4", () => {
  list.push(1);
  list.push(2);
  list.push(3);
  list.push(4);
  list.push(5);
  list.reverse();
  expect(list.pop()).toBe(1);
});