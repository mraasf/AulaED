import Questao1 from '../../src/Lista_2/Questao1';

let list;

beforeEach(() => {
    list = new Questao1();
});

test("Questao 1 ", () => {
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    expect(list.pop()).toBe(5);
});