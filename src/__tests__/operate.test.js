import operate from '../logic/operate';

test('+ opeartion', () => {
  expect(operate(7, 8, '+')).toBe('15');
});

test('- operation', () => {
  expect(operate(11, 1, '-')).toBe('10');
});

test('% operation', () => {
  expect(operate(5, 3, '%')).toBe('2');
});

describe('÷ operation', () => {
  test('dividing operation', () => {
    expect(operate(4, 2, '÷')).toBe('2');
  });

  test('divided by 0', () => {
    expect(operate(10, 0, '÷')).toBe("Can't divide by 0.");
  });
});
