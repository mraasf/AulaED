class Fila2Pilha {
  constructor(size = 5) {
    this.fila = new Fila(size);
    this.aux = new Fila(size);
  }

  push(el) {
    if (this.fila.isFull()) throw new Error("Overflow");

    this.fila.enqueue(el);
  }

  pop() {
    if (this.fila.isEmpty()) throw new Error("Underflow");

    while (this.fila.size() > 1) {
      this.aux.enqueue(this.fila.dequeue());
    }

    while (this.aux.size() > 0) {
      this.fila.enqueue(this.aux.dequeue());
    }

    return this.fila.dequeue();
  }
}

class Fila {
  constructor(size = 10) {
    this.dados = [];
    this.fim = 0;
    this.inicio = 0;
    this.maxSize = size;
  }

  enqueue(newData) {
    if (this.isFull()) {
      throw new Error("Queue is full");
    } else {
      this.dados[this.fim++] = newData;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    } else {
      return this.dados[this.inicio++];
    }
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    } else {
      return this.dados[this.inicio];
    }
  }

  clear() {
    this.inicio = this.fim;
  }

  toString() {}

  size() {
    return this.fim - this.inicio;
  }

  isEmpty() {
    return this.inicio === this.fim;
  }

  isFull() {
    return this.fim - this.inicio === this.maxSize;
  }
}

export default Fila2Pilha;
