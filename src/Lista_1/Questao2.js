class Pilha {
  constructor(size = 10) {
    this.maxSize = size;
    this.dados = [];
    this.topo = -1;
  }

  swap() {
    let aux = new Pilha(this.maxSize);
    let fin = new Pilha(this.maxSize);

    for (let i = 0; i < this.maxSize; i++) this.push(i);

    fin.push(this.pop());
    for (let i = 0; i < this.maxSize - 2; i++) aux.push(this.pop());
    for (let i = 0; i < this.maxSize - 2; i++) fin.push(aux.pop());
    fin.push(this.pop());

    return fin;
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
    let result = "[ ";
    for (let i = 0; i <= this.topo; i++) {
      result += `${this.dados[i]} `;
    }
    result += "]";
    return result;
  }
}

export default Pilha;
