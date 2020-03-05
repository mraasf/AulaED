import Fracao from "../src/Questao1";

let frac1, frac2;

beforeEach(() => {
  frac1 = new Fracao(2, 3);
  frac2 = new Fracao(4, 5);
});

test("multiplicar: ", () => {
  expect(frac1.multiplicar(frac2).toString()).toBe("8/15");
});

test("dividir: ", () => {
  expect(frac1.dividir(frac2).toString()).toBe("10/12");
});

test("divisao por 0: ", () => {
  expect(() => {
    new Fracao(5, 0);
  }).toThrowError("Denominador nao pode ser 0!");
});

test("Fracao invalida: ", () => {
  let frac = new Fracao();
  expect(frac.toString()).toBe("1/1");
});
