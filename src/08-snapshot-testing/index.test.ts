// Uncomment the code below and write your tests
import { generateLinkedList } from '.';

describe('generateLinkedList', () => {
  // Check match by expect(...).toStrictEqual(...)
  test('should generate linked list from values 1', () => {
    const values = [1, 2, 3];
    const expectedLinkedList = {
      value: 1,
      next: {
        value: 2,
        next: {
          next: {
            value: null,
            next: null,
          },
          value: 3,
        },
      },
    };

    expect(generateLinkedList(values)).toStrictEqual(expectedLinkedList);
  });

  // Check match by comparison with snapshot
  test('should generate linked list from values 2', () => {
    const values = [1, 2, 3];
    const expectedLinkedList = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            next: null,
            value: null,
          },
        },
      },
    };

    expect(generateLinkedList(values)).toMatchSnapshot(expectedLinkedList);
  });
});
