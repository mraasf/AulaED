import Atendimento from "../src/Questao7";

test("Pegar Ficha", () => {
  let aten = new Atendimento(5);

  aten.addFilaFicha(2);
  aten.pegarFicha();

  expect(aten.atendTam()).toBe(1);
});

test("Atendimento", () => {
  let aten = new Atendimento(5);

  aten.addFilaFicha(2);
  aten.pegarFicha();
  aten.atender();

  expect(aten.atendTam()).toBe(0);
});

test("atendidos?", () => {
  let aten = new Atendimento(5);

  aten.addFilaFicha(2);
  aten.pegarFicha();
  expect(aten.atender()).toBe("Atendidos!");
});
