import Pilha from "../src/Questao5";

let p;

beforeEach(() => {
  p = new Pilha(5);
});

test("coverage", () => {
  let q = new Pilha();

  expect(() => {
    p.top();
  }).toThrowError("Empty");

  p.push(5);

  expect(p.top()).toBe(5);
});

test("Overflow", () => {
  p.push(5);
  p.push(5);
  p.push(5);
  p.push(5);
  p.push(5);
  expect(() => {
    p.push(5);
  }).toThrowError("Overflow");
});

test("Underflow: ", () => {
  expect(() => {
    p.pop();
  }).toThrowError("Underflow");
});

test("questao 5: 0", () => {
  let pil = new Pilha(8);
  pil.convert(0);
  expect(pil.toString()).toBe("[ 0 0 0 0 0 0 0 0 ]");
});

test("questao 5: 7", () => {
  let pil = new Pilha(8);
  pil.convert(7);
  expect(pil.toString()).toBe("[ 0 0 0 0 0 1 1 1 ]");
});

test("questao 5: 200", () => {
  let pil = new Pilha(8);
  pil.convert(200);
  expect(pil.toString()).toBe("[ 1 1 0 0 1 0 0 0 ]");
});
