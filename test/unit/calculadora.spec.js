const calculadora = require('../../model/calculadora');

describe('Calculadora Suit Test', () => {
  it('should test function it.', () => {
    console.log('Working!');
  });

  it('should return if  1 === 1', () => {
    const sut = 1;

    const expected = 1;

    expect(sut).toBe(expected);
  });

  it('should return a sum of two args', () => {
    const sut = calculadora.somar(2, 2);

    const expected = 2 + 2;

    expect(sut).toBe(expected);
  });
});
