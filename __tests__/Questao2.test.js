import Pilha from "../src/Questao2";

let p;

beforeEach(() => {
  p = new Pilha(5);
});

test("Teste de overflow", () => {
  p.push(5);
  p.push(5);
  p.push(5);
  p.push(5);
  p.push(5);
  expect(() => {
    p.push(5);
  }).toThrowError("Overflow");
});

test("questao 2", () => {
  expect(p.swap().top()).toBe(0)
});