import Fila2Pilha from "../src/Questao3";

let f2p;
beforeEach(() => {
  f2p = new Fila2Pilha(5);
});

test("Pilha", () => {
  f2p.push(1);
  f2p.push(2);
  f2p.push(3);
  f2p.push(4);

  expect(f2p.pop()).toBe(4);
});

test("Underflow", () => {
  expect(() => {
    f2p.pop();
  }).toThrowError("Underflow");
});

test("Overflow", () => {
  f2p.push(1);
  f2p.push(2);
  f2p.push(3);
  f2p.push(4);
  f2p.push(5);

  expect(() => {
    f2p.push(6);
  }).toThrowError("Overflow");
});
