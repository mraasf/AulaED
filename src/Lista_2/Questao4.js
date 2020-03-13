import Lista from "../Lista";

class Questao4 {
  constructor() {
    this.lista1 = new Lista();
    this.lista2 = new Lista();
  }

  push(el) {
    this.lista1.append(el);
  }

  pop() {
    return this.lista1.removeEnd();
  }

  reverse() {
    while (!this.lista1.isEmpty()) {
      this.lista2.append(this.lista1.removeEnd());
    }

    this.lista1 = this.lista2;

    return this.lista2;
  }
}

export default Questao4;