import Questao2 from "../../src/Lista_2/Questao2";

let list;

beforeEach(() => {
  list = new Questao2();
});

test("Questao 2 ", () => {
  list.enqueue(1);
  list.enqueue(2);
  list.enqueue(3);
  list.enqueue(4);
  list.enqueue(5);
  expect(list.dequeue()).toBe(1);
});