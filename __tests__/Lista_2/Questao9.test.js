import Questao9 from '../../src/Lista_2/Questao9';

let list;
beforeEach(() => {
    list = new Questao9();
});

test("Questao 9: ", () => {
    list.addPessoa("antonio", 22);
    list.addPessoa("carlos", 22);
    list.addPessoa("pereira", 22);
    list.addPessoa("flavio", 22);
    expect(list.toString(0)).toBe("antonio:22");
});
test("byName", () => {
    list.addPessoa("c", 1);
    list.addPessoa("d", 3);
    list.addPessoa("e", 5);
    list.addPessoa("b", 4);
    list.addPessoa("a", 2);
    
    expect(list.sortByName().toString()).toBe("a:2 b:4 c:1 d:3 e:5 ")
})
test("byAge", () => {
    list.addPessoa("c", 1);
    list.addPessoa("d", 3);
    list.addPessoa("e", 5);
    list.addPessoa("b", 4);
    list.addPessoa("a", 2);
    
    expect(list.sortByAge().toString()).toBe("c:1 a:2 d:3 b:4 e:5 ")
})