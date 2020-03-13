import Questao8 from "../../src/Lista_2/Questao8";
import Lista from "../../src/Lista";

test("Questao 8", () => {
  let listN = new Lista();
  listN.append(1);
  listN.append(2);
  listN.append(3);
  listN.append(4);
  listN.append(5);

  let listD = new Questao8(listN);
  expect(listD.convert().tail.dado).toBe(5);
  expect(listD.convert().head.dado).toBe(1);
  expect(listD.convert().toString()).toBe("1->2->3->4->5");
});