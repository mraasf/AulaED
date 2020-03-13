import Pilha2Fila from "../../src/Lista_1/Questao4";

let p2f;
beforeEach(() => {
  p2f = new Pilha2Fila(5);
});

test("Pilha", () => {
  p2f.enqueue(1);
  p2f.enqueue(2);
  p2f.enqueue(3);
  p2f.enqueue(4);

  expect(p2f.dequeue()).toBe(1);
});

test("Underflow", () => {
  expect(() => {
    p2f.dequeue();
  }).toThrowError("Underflow");
});

test("Overflow", () => {
  p2f.enqueue(1);
  p2f.enqueue(2);
  p2f.enqueue(3);
  p2f.enqueue(4);
  p2f.enqueue(5);

  expect(() => {
    p2f.enqueue(6);
  }).toThrowError("Overflow");
});
