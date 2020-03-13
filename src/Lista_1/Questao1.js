class Fracao {
  constructor(numerador = 1, denominador = 1) {
    if (denominador === 0) {
      throw new Error("Denominador nao pode ser 0!");
    }
    this.dados = [numerador, denominador];
  }

  multiplicar (frac) {
    let nume = this.dados[0] * frac.dados[0];
    let deno = this.dados[1] * frac.dados[1];

    return new Fracao(nume, deno);
  }

  dividir (frac) {
    let nume = this.dados[0] * frac.dados[1];
    let deno = this.dados[1] * frac.dados[0];

    return new Fracao(nume, deno);
  }

  toString () {
    return `${this.dados[0]}/${this.dados[1]}`;
  }
}

export default Fracao;