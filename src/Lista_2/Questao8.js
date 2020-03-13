import ListaD from "../ListaDuplamenteLigada";

class Questao8 {
  constructor(listaN) {
    this.listaD = new ListaD();
    this.listaN = listaN;
  }

  convert() {
    while (!this.listaN.isEmpty()) {
      this.listaD.add(this.listaN.removeEnd());
    }

    return this.listaD;
  }
}

export default Questao8;