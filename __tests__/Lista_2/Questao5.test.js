import Lista from "../../src/Lista_2/Questao5";

let list;

beforeEach(() => {
  list = new Lista();
});

test("Questao 5", () => {
  list.append(1);
  list.append(2);
  list.append(3);
  list.append(4);
  list.append(5);

  expect(list.toString()).toEqual("1->2->3->4->5");
  list.shuffle();
  expect(list.toString()).not.toEqual("1->2->3->4->5");
});