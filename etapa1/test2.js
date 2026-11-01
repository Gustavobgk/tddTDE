const { expect } = require('chai');
const { CalculadoraDescontoTradicional } = require('./test.js');

// the code being tested
// 501 com 10% de desconto = 450,90
// 1000 com 20% de desconto = 800,80

describe('CalculadoraDescontoTradicional', () => {
  it('calcula desconto para valores acima de 1000', () => {
    const calculadora = new CalculadoraDescontoTradicional('Padrão');
    expect(calculadora.realizarCompra(1000)).to.equal(800);
  });

  it('calcula desconto para valores acima de 500', () => {
    const calculadora = new CalculadoraDescontoTradicional('Padrão');
    expect(calculadora.realizarCompra(501)).to.equal(450.9);
  });

   it('calcula desconto para valores acima de 500 com desconto e VIP', () => {
    const calculadora = new CalculadoraDescontoTradicional('VIP');
    expect(calculadora.realizarCompra(500)).to.equal(425);
  });

   it('calcula desconto para valores acima de 1000 com desconto e VIP', () => {
    const calculadora = new CalculadoraDescontoTradicional('VIP');
    expect(calculadora.realizarCompra(1000)).to.equal(760);
  });

  it('calcula valor para abaixo de 100', () => {
    const calculadora = new CalculadoraDescontoTradicional('Padrão');
    expect(calculadora.realizarCompra(99)).to.equal(114);
  });
});