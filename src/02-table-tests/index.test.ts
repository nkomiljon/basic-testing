import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 5, b: 3, action: Action.Subtract, expected: 2 },
  { a: 7, b: 4, action: Action.Subtract, expected: 3 },
  { a: 6, b: 2, action: Action.Multiply, expected: 12 },
  { a: 0, b: 5, action: Action.Multiply, expected: 0 },
  { a: 8, b: 2, action: Action.Divide, expected: 4 },
  { a: 5, b: 0, action: Action.Divide, expected: Infinity },
  { a: 2, b: 3, action: Action.Exponentiate, expected: 8 },
  { a: 4, b: 0.5, action: Action.Exponentiate, expected: 2 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    'should perform action on a and b and return expected',
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toBe(expected);
    },
  );

  test('should return null for invalid inputs', () => {
    expect(simpleCalculator({ a: '1', b: 2, action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: 1, b: '2', action: Action.Add })).toBeNull();
    expect(simpleCalculator({ a: 1, b: 2, action: 'invalid' })).toBeNull();
    expect(simpleCalculator({ a: null, b: 2, action: Action.Add })).toBeNull();
    expect(
      simpleCalculator({ a: 1, b: undefined, action: Action.Add }),
    ).toBeNull();
  });
});
