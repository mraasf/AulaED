import Parentese from "../src/Questao8";

test("Valido: ", () => {
  let a = new Parentese("[[]]");
  expect(a.lint()).toBe("Valida!");
});
test("Invalido: ", () => {
  let a = new Parentese("[[])");
  expect(a.lint()).toBe("Mal formado");
});

test("Com texto: ", () => {
  let a = new Parentese("[[a]]");
  expect(a.lint()).toBe("Valida!");
});
test("vazio: ", () => {
  let a = new Parentese("]))]]]");
  expect(() => {
    a.lint();
  }).toThrowError("Nao tem abertura");
});
