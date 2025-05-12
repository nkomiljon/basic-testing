// Uncomment the code below and write your tests
import { Action, simpleCalculator } from '.';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 1, b: 2, action: Action.Subtract, expected: -1 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Subtract, expected: 1 },
  { a: 1, b: 2, action: Action.Multiply, expected: 2 },
  { a: 2, b: 2, action: Action.Multiply, expected: 4 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 6, b: 3, action: Action.Divide, expected: 2 },
  { a: 4, b: 2, action: Action.Divide, expected: 2 },
  { a: 8, b: 4, action: Action.Divide, expected: 2 },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 3, b: 2, action: Action.Exponentiate, expected: 9 },
  { a: 2, b: 4, action: Action.Exponentiate, expected: 16 },
  { a: 1, b: 2, action: 'invalid' as Action, expected: null },
  { a: 'invalid', b: 2, action: Action.Add, expected: null },
  { a: 1, b: 'invalid', action: Action.Add, expected: null },
  { a: 'invalid', b: 'invalid', action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  // This test case is just to run this test suite, remove it when you write your own tests
  test.each(testCases)(
    'should calculate $action of $a and $b',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );
});
