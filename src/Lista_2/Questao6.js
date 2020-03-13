import Lista from '../Lista';

class Questao6{
  constructor(lista){
    this.lista = lista;
  }
  substring(start, finish) {
    let aux = new Lista();
    let cont = 0;
    while (!this.lista.isEmpty()) {
      let a = this.lista.removeEnd();
      if(cont >= start && cont <= finish){
        aux.append(a);  
      }
      cont++;
    }
    return aux.toString();
  }

  append(el) {
    this.lista.add(el);
  }

  toString() {
    return this.lista.toString();
  }

}

export default Questao6;