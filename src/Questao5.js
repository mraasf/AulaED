class Pilha {
  constructor(size = 10) {
    this.maxSize = size;
    this.dados = [];
    this.topo = -1;
    this.num = 0;
  }

  convert(num) {
    for (let i = 0; i < this.maxSize; i++) {
      this.push(parseInt(num % 2));
      num /= 2;
    }
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
    let str = "[ ";

    while (!this.isEmpty()) str += this.pop() + " ";

    str += "]";
    return str;
  }
}

export default Pilha;
