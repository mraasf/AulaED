import Pilha from "./Pilha";

class Parentese {
  constructor(texto) {
    this.texto = texto;
    this.pilha = new Pilha(texto.length);
  }

  lint() {
    let abertura = ["[", "("];
    let letra;

    let timesFound =
      this.texto.split("[").length - 1 + (this.texto.split("(").length - 1);
    for (let i = 0; i < this.texto.length; i++) {
      letra = this.texto.charAt(i);

      if (timesFound === 0) {
        throw new Error("Nao tem abertura");
      } else if (abertura.includes(letra)) {
        this.pilha.push(letra);
      } else if (this.pilha.top() == "[" && letra == "]") {
        this.pilha.pop();
      } else if (this.pilha.top() == "(" && letra == ")") {
        this.pilha.pop();
      }
    }

    if (this.pilha.isEmpty()) return "Valida!";
    else return "Mal formado";
  }
}

export default Parentese;
