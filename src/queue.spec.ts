import { Queue } from "./queue";

describe('Queue test', () => {
  test("should push and pop items correct and get correct size", () => {
    const queue = new Queue();
    const numberOfItems = 10;
    for (let i = 0; i < numberOfItems; i++) {
      const item = `item${i}`;
      queue.push(item);
      expect(queue.size).toBe(i + 1);
    }

    for (let i = 0; i < numberOfItems; i++) {
      const item = `item${i}`;
      expect(queue.pop()).toEqual(item);
      expect(queue.size).toBe(numberOfItems - (i + 1));
    }
  });
});
