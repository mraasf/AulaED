import Questao3 from "../../src/Lista_2/Questao3";


    let l;

    beforeEach(() => {
        l = new Questao3();
    });

    test("inserindo", ()=>{
        l.add(1);
        l.add(2);
        l.append(5);
        l.append(8);
        
        expect(l.removeBeggining()).toBe(2);
        expect(l.removeLast()).toBe(8);
    });

    // test("inserir na posiçao", () => {
    //     l.add(1);
    //     l.add(2);
    //     l.append(3);
    //     l.append(4);
    //     l.addAt(2,10);
    //     l.removeBeggining();
    //     l.removeBeggining();
    //     expect(l.removeBeggining()).toBe(10);
    //     l.addAt(1, 20);
    //     expect(l.removeBeggining()).toBe(3);
    // });