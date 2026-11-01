const { expect } = require('chai');
const { CalculadoraDescontoTradicionalTDD } = require('./calculadora.js');

// the code being tested
// 501 com 10% de desconto = 450,90
// 1000 com 20% de desconto = 800,80

describe('CalculadoraDescontoTradicionalTDD', () => {
  it('calcula desconto para valores acima de 500', () => {
    const calculadora = new CalculadoraDescontoTradicionalTDD('Padrão');
    expect(calculadora.realizarCompra(500)).to.equal(450);
  });

  it('calcula desconto para valores acima de 1000', () => {
    const calculadora = new CalculadoraDescontoTradicionalTDD('Padrão');
    expect(calculadora.realizarCompra(1000)).to.equal(800);
  });

it('calcula desconto para valores acima de 1000 que são VIP', () => {
    const calculadora = new CalculadoraDescontoTradicionalTDD('VIP');
    expect(calculadora.realizarCompra(1000)).to.equal(760);
  });

  it('calcula desconto para valores acima de 500 que são VIP', () => {
    const calculadora = new CalculadoraDescontoTradicionalTDD('VIP');
    expect(calculadora.realizarCompra(500)).to.equal(427.5);
  });
   });