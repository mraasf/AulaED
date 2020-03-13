import Lista from "../Lista";

class Questao1 {
  constructor() {
    this.lista = new Lista();
  }

  push(el) {
    return this.lista.append(el);
  }
  pop() {
    return this.lista.removeEnd();
  }
  size() {
    return this.lista.size();
  }
}

export default Questao1;