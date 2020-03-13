import Lista from "../Lista";

class Questao2 { 
    constructor() {
        this.lista = new Lista(); 
    }

    enqueue(el) { 
        return this.lista.add(el); 
    }

    dequeue() { 
        return this.lista.removeEnd(); 
    }

    size() { 
        return this.lista.size(); 
    } 
}

export default Questao2;