import DeQ from "../../src/Lista_1/Questao6";

let dq;

beforeEach(() => {
  dq = new DeQ(5);
});

test("overflow: ", () => {
  dq.insertRear(2);
  dq.insertRear(2);
  dq.insertRear(2);
  dq.insertRear(2);
  dq.insertRear(2);
  expect(() => {
    dq.insertFront(5);
  }).toThrowError("Overflow");
});
test("coverage", () => {
  dq.isEmpty();
  expect(() => {
    dq.rear();
  }).toThrowError("Underflow");

  dq.insertRear(5);
  dq.insertRear(5);
  expect(dq.rear()).toBe(2);
  dq.removeRear();
});

test("remove the only element from front: ", () => {
  dq.insertRear(2);
  dq.removeFront();
  expect(dq.size()).toBe(0);
});

test("remove the only element from rear: ", () => {
  dq.insertRear(2);
  dq.removeRear();
  expect(dq.size()).toBe(0);
});

test("insert rear: ", () => {
  dq.insertRear(2);
  dq.insertRear(2);
  dq.insertRear(2);
  expect(dq.size()).toBe(3);
});

test("insert front: ", () => {
  dq.insertFront(2);
  expect(dq.size()).toBe(1);
});

test("front full: ", () => {
  dq.insertFront(2);

  expect(() => {
    dq.insertFront(5);
  }).toThrowError("Front Full");
});

test("insert after remove front: ", () => {
  dq.insertFront(5);
  dq.insertRear(3);
  dq.insertRear(2);
  dq.removeFront();
  dq.insertFront(5);
  expect(dq.front()).toBe(0);
});

test("remove multiple fronts: ", () => {
  dq.insertRear(2);
  dq.insertRear(3);
  dq.insertRear(4);
  dq.insertRear(5);
  dq.insertRear(6);
  dq.removeFront();
  dq.removeFront();
  dq.removeFront();
  expect(dq.removeFront()).toBe(5);
});

test("remove front: ", () => {
  dq.insertRear(1);
  dq.insertRear(2);
  dq.insertRear(3);
  dq.insertRear(4);
  dq.insertRear(5);
  dq.removeFront();
  dq.removeFront();
  expect(dq.removeFront()).toBe(3);
});
