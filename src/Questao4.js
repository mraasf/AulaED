class Pilha2Fila {
  constructor(size = 5) {
    this.pilha = new Pilha(size);
    this.aux = new Pilha(size);
  }

  enqueue(el) {
    if (this.pilha.isFull()) throw new Error("Overflow");
    this.pilha.push(el);
  }

  dequeue() {
    if (this.pilha.isEmpty()) throw new Error("Underflow");

    while (!this.pilha.isEmpty()) {
      this.aux.push(this.pilha.pop());
    }

    while (!this.aux.isEmpty()) {
      this.pilha.push(this.aux.pop());
    }

    return this.pilha.pop();
  }
}

class Pilha {
  constructor(size = 10) {
    this.maxSize = size;
    this.dados = [];
    this.topo = -1;
  }

  push(newData) {
    if (this.isFull()) {
      throw new Error("Overflow");
    } else {
      this.dados[++this.topo] = newData;
    }
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Underflow");
    } else {
      return this.dados[this.topo--];
    }
  }

  top() {
    if (this.isEmpty()) {
      throw new Error("Empty");
    } else {
      return this.dados[this.topo];
    }
  }

  clear() {
    this.topo = -1;
  }

  size() {
    return this.topo + 1;
  }

  isEmpty() {
    return this.size() === 0;
  }

  isFull() {
    return this.size() === this.maxSize;
  }

  toString() {
    let result = "[";
    for (let i = 0; i <= this.topo; i++) {
      result += ` ${this.dados[i]} `;
    }
    result += "]";
    return result;
  }
}

export default Pilha2Fila;
