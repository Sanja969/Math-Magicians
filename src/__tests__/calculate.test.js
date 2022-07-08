import calculate from '../logic/calculate';

test('Calculate correctly', () => {
  const obj = {
    total: 5,
    next: 2,
    operation: '-',
  };
  const operation = '=';
  expect(calculate(obj, operation)).toEqual({
    next: null,
    operation: null,
    total: '3',
  });
});
