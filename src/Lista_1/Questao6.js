class DeQ {
  constructor(size = 10) {
    this.dado = [];

    this.vfront = -1;
    this.vrear = -1;

    this.maxSize = size;
  }

  insertFront(el) {
    if (this.isFull()) {
      throw new Error("Overflow");
    } else if (this.vfront === 0) {
      throw new Error("Front Full");
    } else if (this.isEmpty()) {
      this.vfront = this.vrear = 0;
    } else {
      this.dado[this.vfront--] = el;
    }
  }

  insertRear(el) {
    if (this.isFull()) throw new Error("Overflow");
    else if (this.isEmpty()) {
      this.vfront = this.vrear = 0;
    }
    this.dado[this.vrear++] = el;
  }

  removeFront() {
    if (this.isEmpty()) throw new Error("Underflow");
    else if (this.size() === 1) {
      let temp = this.vfront;
      this.vfront = this.vrear = -1;
      return this.dado[temp];
    }
    return this.dado[this.vfront++];
  }

  removeRear() {
    if (this.isEmpty()) throw new Error("Underflow");
    else if (this.size() === 1) {
      let temp = this.vrear;
      this.vfront = this.vrear = -1;
      return this.dado[temp];
    }
    return this.dado[this.vrear--];
  }

  size() {
    if (this.vfront === 0 && this.vrear === 0) return 1;
    return this.vrear - this.vfront;
  }

  isEmpty() {
    return this.vrear === this.vfront;
  }

  isFull() {
    return this.size() === this.maxSize;
  }

  rear() {
    if (this.isEmpty()) throw new Error("Underflow");
    return this.vrear;
  }

  front() {
    if (this.isEmpty()) throw new Error("Underflow");
    return this.vfront;
  }
}

export default DeQ;
